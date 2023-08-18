import { Router } from 'express';
import usersRouter from './users.js';
import citiesRouter from './cities.js';

let router = Router()

router.use('/auth', usersRouter)
router.use('/cities', citiesRouter)

export default router;
