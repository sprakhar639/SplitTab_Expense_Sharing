import db from "../prisma/db.ts";
const { Group } = db.orm.public;

async function createGroup({ name }) {
  const group = await Group.create({ name });
  return group;
}

async function addMember({ groupId, userId }) {
  const member = await db.orm.public.GroupMember.create({ groupId, userId });
  return member;
}
export { createGroup, addMember };
