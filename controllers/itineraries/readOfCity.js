import Itinerary from '../../models/Itinerary.js'
import { Types } from 'mongoose'

export default async (req, res) => {
    try {
        let queries = {}
        let { cityID } = req.params
        if (Types.ObjectId.isValid(cityID)) {
            queries.cityID = cityID
            const itineraries = await Itinerary.find(queries).select('').populate("postedBy")
            console.log(itineraries);
            return res.status(200).json({
                success: true,
                response: itineraries,
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