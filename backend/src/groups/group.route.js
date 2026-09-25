import {Router} from 'express'
import {create,addGroupMember} from '../groups/groups.controller.js'

const router=Router();

router.post('/create',create);
router.post('/:groupId/members',addGroupMember);

export default router;