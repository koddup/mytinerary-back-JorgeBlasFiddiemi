import jwt from 'jsonwebtoken'
import User from '../../models/User.js'
import bcryptjs from 'bcryptjs'

export default async (req, res) => {
    try {
        const userDB = await User.findOne({ mail: req.body.mail })
        if (!userDB) {
            return res.status(400).json({
                success: false,
                message: "Email not registered!"
            })
        }

        let passValid = bcryptjs.compareSync(req.body.password, userDB.password)

        if (!passValid) {
            return res.status(400).json({
                success: false,
                message: "The email or password incorrect!"
            })
        }

        let user = { firstName: userDB.firstName, 
            lastName: userDB.lastName, 
            mail: userDB.mail, 
            photo: userDB.photo, 
            country: userDB.country }
        const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' })

        return res.status(200).json({
            success: true,
            userData: user,
            token: token,
            message: "Sign in successfully"
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}