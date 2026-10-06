import { createGroup} from "./group.service.js";

async function create(req, res) {
  try {
    const { name } = req.body;
    const group = await createGroup({ name });

    return res
      .status(201)
      .json({ message: "Group created succesfully", group });
  } catch (error) {
    console.error("Create group error:", error);
    return res.status(500).json({
      message: "Failed to create group",
    });
  }
}

async function addMemberController(req, res) {
  try {
    const { groupId } = req.params;
    const { userIds } = req.body;

    const member = await addMember({
      groupId: Number(groupId),
      userId: userIds,
    });

    return res.status(201).json({
      message: "Member added successfully",
      member,
    });
  } catch (error) {
    console.error("Add Member Error:", error);

    return res.status(500).json({
      message: "Failed to add member",
    });
  }
}

export { create,addMemberController };
