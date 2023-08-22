import City from '../../models/City.js'
import { Types } from 'mongoose'

export default async (req, res) => {
    try {
        let { id } = req.params
        if (Types.ObjectId.isValid(id)) {
            let city = await City.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            )
            if (city) {
                return res.status(200).json({
                    success: true,
                    response: city,
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