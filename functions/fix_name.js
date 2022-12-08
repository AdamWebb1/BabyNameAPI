// Transform name with first character capitalized and the 
// rest lower case
const fixName = function(name) {
    let newName = name.toLowerCase();
    newName = newName.charAt(0).toUpperCase() +
      newName.substr(1)
    return newName
}
  
module.exports = fixName