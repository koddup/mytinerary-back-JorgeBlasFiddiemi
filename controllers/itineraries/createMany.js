import Itinerary from '../../models/Itinerary.js'

export default async (req, res) => {
    try {
        const created = await Itinerary.insertMany(req.body)
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