const { byName, byYear } = require("us-baby-names");

const getCount = (name, year) => {
    names = byYear[year]
    return names.filter(n => n.name == name)[0].count
}

const baby_year_name = (req, res) => {
    res.status(200).json({
        success: true,
        data: getCount(req.params.name)
    })
}
