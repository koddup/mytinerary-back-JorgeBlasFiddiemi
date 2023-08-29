import Itinerary from '../../models/Itinerary.js'
import { Types } from 'mongoose'

export default async (req, res) => {
    try {
        let { id } = req.params
        if (Types.ObjectId.isValid(id)) {
            let itinerary = await Itinerary.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            )
            if (itinerary) {
                return res.status(200).json({
                    success: true,
                    response: itinerary,
                })
            } else {
                return res.status(404).json({
                    success: false,
                    response: 'Not found',
                })
            }
        } else {
            return res.status(500).json({
                success: false,
                response: "Not a valid id",
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error,
        })
    }
}