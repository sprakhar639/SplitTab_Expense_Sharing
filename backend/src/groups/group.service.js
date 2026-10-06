import db from "../prisma/db.ts";
const { Group } = db.orm.public;

async function createGroup({ name }) {
  const group = await Group.create({ name });
  return group;
}

async function addMember({ groupId, userIds }) {
  const members = [];

  for (const UserId of userIds) {
    const member = await db.orm.public.GroupMember.create({
      groupId,
      userId,
      role: "MEMBER",
    });
    member.push(member);
  }
  return member;
}
export { createGroup };
