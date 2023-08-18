import City from '../../models/City.js'

export default async (req, res) => {
    try {
        const created = await City.insertMany(req.body)
        return res.status(201).json({
            success: true,
            response: created,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error,
        })
    }
}