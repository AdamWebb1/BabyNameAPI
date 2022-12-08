const { byName, byYear } = require("us-baby-names");
const fix_name = require("../fix_name")
const format_to_html = require("../format_to_html")

const getNames = (year, letter) => {
    try{
        letter = letter.toUpperCase()
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
        
        return sorted.filter(n => n.name[0] == letter).sort()
    }
    catch{
        return false
    }
}

const baby_year = (req, res) => {
    data = getNames(req.params.year, req.params.letter)
    if (data != false){
        res.status(200).send(data)
        return
    }
    res.status(404).send("Data not found")
}

module.exports = baby_year