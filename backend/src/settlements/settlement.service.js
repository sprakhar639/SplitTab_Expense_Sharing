import db from "../prisma/db.ts";
import {and} from  "@prisma/orm-postgres/orm-client"
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
    const split = await db.orm.public.ExpenseSplit.where((s) =>
      and(s.expenseId.eq(expense.id),s.userId.eq(userId)),
    ).first();

    if (split) {
      owed += split.amount;
    }
  }

  const settlements = await db.orm.public.Settlement.where((s) =>
    and(s.groupId.eq(groupId),s.fromUserId.eq(userId))
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
