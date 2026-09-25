import {createGroup,addMember} from '../groups/groups.service.js'

async function create(req,res){
    try{
        const {name}=req.body;
        const group=await createGroup({name});

        return res.status(201).json({message:"Group created succesfully",group})
    }
    catch (error){
        console.error("Create group error:",error);
    return res.status(500).json({
        message:"Failed to create group"
    })
    }
}

async function addGroupMember(req,res){
    try{
        const {groupId} =req.params;
        const {userId} =req.body;

        const member=await addMember({
            groupId,
            userId
        })
        return res.status(201).json({
            message:"Member added successfully",member
        })
    }catch(error){
        console.error(error)
            console.error("Add member error",error);
            return res.status(500).json({
                message:"Failed to add member",
            })
        }
    }

export {create,addGroupMember};