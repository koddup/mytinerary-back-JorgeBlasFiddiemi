import Itinerary from '../../models/Itinerary.js'
import { Types } from 'mongoose'

export default async (req, res) => {
    try {
        let { id } = req.params
        if (Types.ObjectId.isValid(id)) {
            const itinerary = await Itinerary.findById(id).select('')
            return res.status(200).json({
                success: true,
                response: itinerary,
            })
        } else {
            return res.status(500).json({
            success: false,
            response: "Not a valid id",
        })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'error' })
    }
}