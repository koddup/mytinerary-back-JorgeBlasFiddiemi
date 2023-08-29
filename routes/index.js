import { Router } from 'express';
import usersRouter from './users.js';
import citiesRouter from './cities.js';
import itinerariesRouter from './itineraries.js';

let router = Router()

router.use('/auth', usersRouter)
router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)

export default router;
