import db from "../prisma/db.ts";
const { Group } = db.orm.public;

async function createGroup({ name }) {
  const group = await Group.create({ name });
  return group;
}

async function addMember({ groupId, userIds }) {
  const members = [];

  for (const userId of userIds) {
    const member = await db.orm.public.GroupMember.create({
      groupId,
      userId:Number(userId),
      role: "MEMBER",
    });
    members.push(member);
  }
  return members;
}
export { createGroup,addMember };
