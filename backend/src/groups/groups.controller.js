import createGroup from '../groups/groups.service.js'


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

export default create;