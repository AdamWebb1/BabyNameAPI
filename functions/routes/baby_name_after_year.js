const {byName, byYear} = require("us-baby-names");

const getNameAfterYear = (name, year) => {
    names = byName[name]
    names = names.filter(name => name.year > year)
    console.log(names)
    sum = 0
    for (i in names){
        sum += names[i].count
    }
    return sum
}

const baby_name_after_year = (req, res) => {
    res.status(200).json({
        success: true,
        data: baby_name_after_year(req.params.name, req.params.year)
    })
    
}