import {addExpense} from '../expenses/expense.service.js'


async function addExpenseInGroup(req,res){
try{
    const {groupId}=req.params;
    const {amount,paidBy} =req.body;
    const expense =await addExpense({
        groupId,amount,paidBy
})
 return res.status(201).json({message:"Expense added Successfully",expense})
}catch(error){
    console.error("Expense Add Error",error);
    return res.status(405).json({message:"Failed to add expense"})
}
}

export {addExpenseInGroup}