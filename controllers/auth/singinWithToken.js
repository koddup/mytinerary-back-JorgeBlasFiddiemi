export default async (req, res) => {
    try {
        let { firstName, lastName, mail, photo, country } = req.user
        return res.status(200).json({
            success: true,
            userData: { firstName, lastName, mail, photo, country },
            message: "Log in successfully"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}