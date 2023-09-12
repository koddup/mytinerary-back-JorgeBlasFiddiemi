import { Router } from 'express';
import authRouter from './auth.js';
import citiesRouter from './cities.js';
import itinerariesRouter from './itineraries.js';

let router = Router()

router.use('/auth', authRouter)
router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)

export default router;
