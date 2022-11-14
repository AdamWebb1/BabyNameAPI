const router = require('express').Router();
const { byName, byYear } = require("us-baby-names");

const after_year = require('./routes/baby_name_after_year');
const before_year = require('./routes/baby_name_before_year');
const name_year = require('./routes/baby_name_year');
const name = require('./routes/baby_name');
const year_end = require('./routes/baby_year_end');
const year_name = require('./routes/baby_year_name');
const year_start = require('./routes/baby_year_start');
const year = require('./routes/baby_year');


router.get("/baby-name/:name/after/:afterYear", after_year);
router.get("/baby-name/:name/before/:beforeYear", before_year);
router.get("/baby-name/:name/:year", name_year);
router.get("/baby-name/:name", name);
router.get("/baby-year/:year/:name", year_name);
router.get("/baby-year-start/:year/:letter", year_start);
router.get("/baby-year-end/:year/:letter", year_end);
router.get("/baby-year/:year", year);


module.exports = router;
