const { byName, byYear } = require("us-baby-names");

const countNames = (name) => {
    names = byName[name]
    total = 0
    names.forEach(element => {
        total += element.count
    });
    return total
}

const baby_name = (req, res) => {
    res.status(200).json({
        success: true,
        data: countNames(req.params.name)
    })
}