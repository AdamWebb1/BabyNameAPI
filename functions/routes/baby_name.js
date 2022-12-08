const { byName, byYear } = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const countNames = (name) => {
    name = fix_name(name)
    data = byName[name]
    return format_to_html(data)
}

const baby_name = (req, res) => {
    data = countNames(req.params.name)
    if (data != false){
        res.status(200).send(data)
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_name