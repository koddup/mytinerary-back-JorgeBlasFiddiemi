import {Router} from 'express';
import signup from '../controllers/auth/signup.js';
import createMany from '../controllers/auth/createMany.js';
import readOne from '../controllers/auth/readOne.js';
import validator from '../middlewares/validator.js';
import { signupSchema } from '../validators/signupValidator.js';
import singin from '../controllers/auth/singin.js';
import passport from '../middlewares/passport.js';
import singinWithToken from '../controllers/auth/singinWithToken.js';
const router = Router();

//router.get('/:id', readOne);
//router.post('/many', createMany);

router.post('/up', validator(signupSchema), signup);
router.post('/in', singin);
router.get('/token', passport.authenticate('jwt', {session:false}), singinWithToken);

export default router;