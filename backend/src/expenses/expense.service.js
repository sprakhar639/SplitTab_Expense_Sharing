import db from '../prisma/db.ts'

async function addExpense({groupId,amount,paidBy}){
    const  expense=await db.orm.public.Expense.create({
        groupId,amount,paidBy
    })
    return expense;
}

export {addExpense}

