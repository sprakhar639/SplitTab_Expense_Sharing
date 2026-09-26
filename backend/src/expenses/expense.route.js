import {Router} from 'express'
import {addExpenseInGroup} from '../expenses/expense.controller.js'


const route=Router()

route.post('/:groupId/expense',addExpenseInGroup);

export default route;