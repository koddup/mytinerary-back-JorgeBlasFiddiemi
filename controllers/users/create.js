import User from '../../models/User.js'

export default async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).json({
            success: true,
            response: user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error,
        })
    }
}