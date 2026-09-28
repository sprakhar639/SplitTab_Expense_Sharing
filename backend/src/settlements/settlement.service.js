import db from "../prisma/db.ts";

async function createSettlementService({
  groupId,
  fromUserId,
  toUserId,
  amount
}) {
  const settlement = await db.orm.public.Settlement.create({
    groupId,
    fromUserId,
    toUserId,
    amount
  });

  return settlement;
}

export { createSettlementService };