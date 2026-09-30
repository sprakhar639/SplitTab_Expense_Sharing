import {Router} from 'express'
import {createSettlement,getBalanceController} from './settlement.controller.js'

const route=Router();

route.post('/',createSettlement);
route.get('/balance/:groupId/:userId',getBalanceController)

export default route