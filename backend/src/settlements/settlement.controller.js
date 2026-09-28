import { createSettlementService } from "./settlement.service.js";
async function createSettlement(req, res) {
  try {
    const { groupId, fromUserId, toUserId, amount } = req.body;

    const settlement = await createSettlementService({
      groupId: Number(groupId),
      fromUserId: Number(fromUserId),
      toUserId: Number(toUserId),
      amount: Number(amount),
    });

    return res.status(201).json({
      message: "Settlement created Successfully",settlement
    });
  } catch (error) {
    console.error("Settlement Error:", error);

    return res.status(500).json({
      message: "Failed to create settlement",
    });
  }
}

export { createSettlement };
