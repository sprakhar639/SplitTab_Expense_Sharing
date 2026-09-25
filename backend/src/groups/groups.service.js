import db from "../prisma/db.ts";
const { Group } = db.orm.public;

async function createGroup({name}){
 
    const group=await Group.create({name})
    return group;
}

export default createGroup;