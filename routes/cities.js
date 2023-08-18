import {Router} from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import createMany from '../controllers/cities/createMany.js';
import readOne from '../controllers/cities/readOne.js';
const router = Router();

router.post('/', create);
router.post('/many', createMany);
router.get('/', read);
router.get('/:id', readOne);

export default router;