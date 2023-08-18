import User from '../../models/User.js'

export default async (req, res) => {
    try {
        let queries = {}
        if (req.query.email) {
            queries.email = new RegExp(req.query.email, 'i')
        }
        const user = await User.find(queries).select('-password')
        return res.status(200).json({
            success: true,
            response: user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'error' })
    }
}