import {Router} from 'express'
import {addExpenseInGroup,splitExpenseController} from '../expenses/expense.controller.js'
import authMiddleware from '../middleware/auth.middleware.js';


const route=Router()

route.post('/:groupId/expense',authMiddleware,addExpenseInGroup);
route.post('/expenses/:expenseId/split',authMiddleware,splitExpenseController);

export default route;