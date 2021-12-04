function findMatching(array, string) {
    const driver = array.filter(drivers => drivers.toUpperCase() === string.toUpperCase())
    return driver;
}
function fuzzyMatch(array, string) {
    const driver = array.filter(drivers => drivers.startsWith(string))
    return driver;
}
function matchName(array,string) {
    const driver = array.filter(drivers => drivers.name === string)
    return driver;
}
// Code your solution here
