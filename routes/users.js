import {Router} from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import createMany from '../controllers/users/createMany.js';
import readOne from '../controllers/users/readOne.js';
const router = Router();

router.post('/', create);
router.post('/many', createMany);
router.get('/', read);
router.get('/:id', readOne);

export default router;