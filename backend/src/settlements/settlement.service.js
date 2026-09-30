import db from "../prisma/db.ts";

async function createSettlementService({
  groupId,
  fromUserId,
  toUserId,
  amount,
}) {
  const settlement = await db.orm.public.Settlement.create({
    groupId,
    fromUserId,
    toUserId,
    amount,
  });

  return settlement;
}

async function getBalanceService({ groupId, userId }) {
  const expenses = await db.orm.public.Expense.where((e) =>
    e.groupId.eq(groupId),
  ).all();

  let owed = 0;

  for (const expense of expenses) {
    const spilt = await db.orm.public.ExpenseSplit.where((s) =>
      s.expenseId.eq.apply(expense.id).and(s.userId.eq(userId)),
    ).first();

    if (split) {
      owed += spilt.amount;
    }
  }

  const settlements = await db.orm.public.Settlement.where((s) =>
    s.groupId.eq(groupId).and(s.fromUserId.eq(userId)),
  ).all();

  let paid = 0;

  for (const settlement of settlements) {
    paid += settlement.amount;
  }

  const remaining = owed - paid;
  return {
    owed,
    paid,
    remaining,
    settled: remaining <= 0,
  };
}
export { createSettlementService, getBalanceService };
