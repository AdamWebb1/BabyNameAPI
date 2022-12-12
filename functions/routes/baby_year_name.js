const { byName, byYear } = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const getCount = (name, year) => {
    name = fix_name(name)
    try{
        names = byYear[year]
        return format_to_html([names.filter(n => n.name == name)[0].count])
    }
    catch{
        return false
    }
}

const baby_year_name = (req, res) => {
    data = getCount(req.params.name, req.params.year)
    if (data != false){
        res.status(200).send(data)
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_year_name