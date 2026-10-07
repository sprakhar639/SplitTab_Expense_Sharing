import db from "../prisma/db.ts";
const { Group } = db.orm.public;
import { and } from "@prisma/orm-postgres/orm-client";

async function createGroup({ name, userId }) {
  return await db.transaction(async (tx) => {
    const group = await tx.Group.create({ name });
    await tx.GroupMember.create({
      groupId: group.id,
      userId,
      role: "ADMIN",
    });
    return group;
  });
}

async function addMember({ groupId, userIds, requesterId }) {
  return await db.transaction(async (tx) => {
    const requester = await tx.GroupMember.findFirst({
      where: (gm) => and(gm.groupId.eq(groupId), gm.userId.eq(requesterId)),
    });

    if (!requester) {
      throw new Error("You are not a member of the group");
    }

    if (requester.role !== "ADMIN") {
      throw new Error("Only group admins can add members");
    }

    const members = [];

    for (const userId of userIds) {
      const member = await tx.GroupMember.create({
        groupId,
        userId: Number(userId),
        role: "MEMBER",
      });
      members.push(member);
    }
    return members;
  });
}
export { createGroup, addMember };
