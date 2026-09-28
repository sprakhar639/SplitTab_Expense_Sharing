import {Router} from 'express'
import {createSettlement} from './settlement.controller.js'

const route=Router();

route.post('/',createSettlement);

export default route