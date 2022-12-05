const { byName, byYear } = require("us-baby-names");

const getNames = (year) => {
    names = byYear[year]
    sorted = names.sort((a, b) => {
        const nameA = a.name
        const nameB = b.name

        if (nameA < nameB){
            return -1
        }
        if (nameA > nameB){
            return 1
        }
        return 0
    })
    return sorted
}

const baby_year = (req, res) => {
    res.status(200).json({
        success: true,
        data: getNames(req.params.name)
    })
}

module.exports = baby_year