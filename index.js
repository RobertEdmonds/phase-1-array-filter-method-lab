// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    const pickDriver = array.filter(name => name.toUpperCase() === string.toUpperCase())
    return pickDriver
}
function fuzzyMatch(array, string){
    const pickDriverByLetter = array.filter(char => char.slice(0, string.length) === string);
    return pickDriverByLetter
}
function matchName(array, string){
    const whereDrivers = array.filter(name=> name.name === string)
    return whereDrivers
}
    
