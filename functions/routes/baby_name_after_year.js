const {byName, byYear} = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const getNameAfterYear = (name, year) => {
    name = fix_name(name)
    names = byName[name]
    names = names.filter(name => name.year > year)
    sum = 0
    for (i in names){
        sum += names[i].count
    }
    return format_to_html([sum])
}

const baby_name_after_year = (req, res) => {
    data = getNameAfterYear(req.params.name, req.params.afterYear)
    if (data != false){
        res.status(200).send(data)
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_name_after_year