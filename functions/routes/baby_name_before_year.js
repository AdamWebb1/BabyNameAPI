const {byName, byYear} = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const getNameBeforeYear = (name, year) => {
    try{
        names = byName[name]
        names = names.filter(name => name.year < year)
        console.log(names)
        sum = 0
        for (i in names){
            sum += names[i].count
        }
        return sum
    }
    catch{
        return false
    }
}

const baby_name_before_year = (req, res) => {
    data = getNameBeforeYear(req.params.beforeYear, req.params.name)
    if (data != false){
        res.status(200).send(data)
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_name_before_year