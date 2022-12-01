const { byName, byYear } = require("us-baby-names");

const countNames = (name) => {
    data = byName[name]
    return total
}

const baby_name = (req, res) => {
    res.status(200).json({
        success: true,
        data: countNames(req.params.name)
    })
}