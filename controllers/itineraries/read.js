import Itinerary from '../../models/Itinerary.js'

export default async (req, res) => {
    try {
        let queries = {}
        if (req.query.itinerary) {
            // Busqueda de coincidencia con el comienzo en backend
            // queries.itinerary = new RegExp('^' + req.query.itinerary, 'i')
            
            // Busqueda de coincidencia con el comienzo en frontend
            queries.itinerary = new RegExp(req.query.itinerary, 'i')
        }
        if (req.query.country) {
            queries.country = new RegExp(req.query.country, 'i')
        }
        const itineraries = await Itinerary.find(queries).select('')
        return res.status(200).json({
            success: true,
            response: itineraries,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'error' })
    }
}