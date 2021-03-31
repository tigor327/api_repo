const tokenAuth = ({dotenv}) => {
    return async function auth(req,res,next) {
        try {
        dotenv.config()

        const bearerHeader = req.headers['authorization']

        if (typeof bearerHeader !== 'undefined'){
            const token = bearerHeader && bearerHeader.split(' ')[1]
            req.token = token
            next()
            }
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }
}