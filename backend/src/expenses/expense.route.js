import {Router} from 'express'
import {addExpenseInGroup,splitExpenseController} from '../expenses/expense.controller.js'


const route=Router()

route.post('/:groupId/expense',addExpenseInGroup);
route.post('/expenses/:expenseId/split',splitExpenseController);

export default route;