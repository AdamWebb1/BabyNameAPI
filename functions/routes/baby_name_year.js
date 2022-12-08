const { byName, byYear } = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const countNamesByYear = (name, year) => {
    try{
        names = byName[name]
        return names.filter(name => name.year == year)[0].count
    }
    catch{
        return false
    }
}

const baby_name_by_year = (req, res) => {
    data = countNamesByYear(req.params.name, req.params.year)
    if (data != false){
        console.log(typeof(data))
        res.status(200).send(data.toString())
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_name_by_year