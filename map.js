class Response {
    success (req, res, data) {
        res.status(200).json({
            success: true,
            data
        })
    }

    error(req, res, error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const instance = new Response();
module.exports = instance;