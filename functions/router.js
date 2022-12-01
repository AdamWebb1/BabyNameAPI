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

// Transform the data object elements into an
// HTML table
const formatToHTML = function(dataArr) {
    // If dataArr is undefined or null, make an empty array
    if (!dataArr) {
      dataArr = [];
    }
    // Use the Array.map function to convert each record 
    // into an HTML table element.
    dataArr = dataArr.map(item => {
      // Create the HTML here
      let html = '<tr>'
      html += (item.year) ? '<td>'+item.year+'</td>' : '';
      html += (item.name) ? '<td>'+item.name+'</td>' : '';
      html += (item.sex) ? '<td>'+item.sex+'</td>' : '';
      html += (item.count) ? '<td>'+item.count+'</td>' : '';
      html += '</tr>';
      return html
    })
    // Now join all the elements together inside the 
    // <table><tbody> elements.
    return '<table><tbody>'+
      dataArr.join('')+'</tbody></table>';
  }
  
  // Transform name with first character capitalized and the 
  // rest lower case
  const fixName = function(name) {
    let newName = name.toLowerCase();
    newName = newName.charAt(0).toUpperCase() +
      newName.substr(1)
    return newName
  }
  

router.get("/baby-name/:name/after/:afterYear", after_year);
router.get("/baby-name/:name/before/:beforeYear", before_year);
router.get("/baby-name/:name/:year", name_year);
router.get("/baby-name/:name", name);
router.get("/baby-year/:year/:name", year_name);
router.get("/baby-year-start/:year/:letter", year_start);
router.get("/baby-year-end/:year/:letter", year_end);
router.get("/baby-year/:year", year);


module.exports = router;
// module.exports = formatToHTML;