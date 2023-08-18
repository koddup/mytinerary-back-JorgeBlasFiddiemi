import City from '../../models/City.js'

export default async (req, res) => {
    try {
        let queries = {}
        if (req.query.city) {
            // Busqueda de coincidencia con el comienzo en backend
            // queries.city = new RegExp('^' + req.query.city, 'i')
            queries.city = new RegExp(req.query.city, 'i')
        }
        if (req.query.country) {
            queries.country = new RegExp(req.query.country, 'i')
        }
        const cities = await City.find(queries).select('')
        return res.status(200).json({
            success: true,
            response: cities,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'error' })
    }
}