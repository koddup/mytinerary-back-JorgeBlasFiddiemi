import {Router} from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import createMany from '../controllers/cities/createMany.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';
const router = Router();

router.get('/', read);
router.get('/:id', readOne);
router.post('/', create);
router.post('/many', createMany);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;