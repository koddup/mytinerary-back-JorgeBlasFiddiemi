import jwt from 'jsonwebtoken'
import User from '../../models/User.js'
import bcryptjs from 'bcryptjs'

export default async (req, res, next) => {
    try {
        const hashedPass = bcryptjs.hashSync(req.body.password, 10)
        console.log(req.body.password);
        req.body.password = hashedPass
        const exist = await User.findOne({ mail: req.body.mail })
        if (!exist) {
            const user = await User.create(req.body)
            let usertmp = {
                firstName: user.firstName,
                lastName: user.lastName,
                mail: user.mail,
                photo: user.photo,
                country: user.country
            }
            const token = jwt.sign(usertmp, process.env.SECRET_KEY, { expiresIn: '1h' })
            return res.status(201).json({
                success: true,
                userData: usertmp,
                token: token,
                message: "Sign up successfully"
            })
        }
        return res.status(400).json({
            success: false,
            message: "Email already registered!"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}