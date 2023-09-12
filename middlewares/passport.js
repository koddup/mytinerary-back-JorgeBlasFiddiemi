import passport from "passport"
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/User.js'


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}

const fn = async (payload, next)  => {
    try {
        const user = await User.findOne({ mail: payload.mail })
        if (!user){
            throw new Error("Email not registered!")
        }
        next(null, user)
    } catch (error) {
        next(error, null)
    }
}

export default passport.use(new Strategy(opts, fn))