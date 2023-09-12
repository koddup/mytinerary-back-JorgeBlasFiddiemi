const validator = (schema) => (req, res, next) => {
    const validation = schema.validate(req.body, {abortEarly: true})
    if (validation.error) {
        console.log(validation.error);
        return res.status(400).json({
            success: false,
            message: validation.error.details[0].message,
        })
    }
    return next()
}

export default validator