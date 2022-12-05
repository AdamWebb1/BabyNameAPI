const { byName, byYear } = require("us-baby-names");

const countNames = (name) => {
    data = byName[name]
    return data
}

const baby_name = (req, res) => {
    res.status(200).json({
        success: true,
        data: countNames(req.params.name)
    })
}

module.exports = baby_name