const { byName, byYear } = require("us-baby-names");

const countNamesByYear = (name, year) => {
    names = byName[name]
    return names.filter(name => name.year == year)[0].count
}

const baby_name_by_year = (req, res) => {
    res.status(200).json({
        success: true,
        data: countNamesByYear(req.params.name, req.params.year)
    })
}

module.exports = baby_name_by_year