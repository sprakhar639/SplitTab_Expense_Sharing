import { addExpense, splitExpense } from "../expenses/expense.service.js";

async function addExpenseInGroup(req, res) {
  try {
    const { groupId } = req.params;
    const { amount, paidBy, description } = req.body;
    const expense = await addExpense({
      groupId,
      amount,
      paidBy,
      description,
    });
    return res
      .status(201)
      .json({ message: "Expense added Successfully", expense });
  } catch (error) {
    console.error("Expense Add Error", error);
    return res.status(405).json({ message: "Failed to add expense" });
  }
}

async function splitExpenseController(req, res) {
  try {
    const { groupId, expenseId } = Number(req.params);
    const { userIds } = req.body;

    const splits = await splitExpense({
      expenseId: Number(expenseId),
      groupId: Number(groupId),
      userIds,
    });
    return res.status(201).json({
      message: "Expense split successfully",
      splits,
    });
  } catch (error) {
    console.error("SPLIT ERROR:", error);

    return res.status(404).json({
      message: "Expense split failed",
    });
  }
}

export { addExpenseInGroup, splitExpenseController };
