import {Router} from 'express'
import create from '../groups/groups.controller.js'

const router=Router();

router.post('/create',create);

export default router;