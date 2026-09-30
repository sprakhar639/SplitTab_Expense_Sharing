import db from "../prisma/db.ts";

async function addExpense({ groupId, amount, paidBy,description }) {
  const expense = await db.orm.public.Expense.create({
    groupId,
    amount,
    paidBy,
    description
  });
  return expense;
}

async function splitExpense({ expenseId, userIds }) {
  const expense = await db.orm.public.Expense.where((e) =>
    e.id.eq(expenseId),
  ).first();

  if (!expense) {
    throw new Error("Expense Not Found");
  }

  const splitAmount = expense.amount / userIds.length;

  const splits = [];
  for (const userId of userIds) {
    const split = await db.orm.public.ExpenseSplit.create({
      expenseId,
      userId,
      amount: splitAmount,
    });
    splits.push(split);
  }
  return splits;
}

export { addExpense, splitExpense };
