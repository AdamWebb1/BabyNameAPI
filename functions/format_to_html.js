// Transform the data object elements into an
// HTML table
const format_to_html= function(dataArr) {
    // If dataArr is undefined or null, return false so you know to return "Data not found."
    if (!dataArr){return false}
    // Use the Array.map function to convert each record 
    // into an HTML table element.
    if (dataArr.length == 1){
      return "<table><tbody>" + dataArr[0] + "</tbody></table>"
    }
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
  
module.exports = format_to_html