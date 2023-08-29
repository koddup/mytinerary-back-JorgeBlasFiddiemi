import {Router} from 'express';
import create from '../controllers/itineraries/create.js';
import read from '../controllers/itineraries/read.js';
import createMany from '../controllers/itineraries/createMany.js';
import readOne from '../controllers/itineraries/readOne.js';
import update from '../controllers/itineraries/update.js';
import destroy from '../controllers/itineraries/destroy.js';
const router = Router();

router.get('/', read);
router.get('/:id', readOne);
router.post('/', create);
router.post('/many', createMany);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;