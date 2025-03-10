// Code your solution here
function findMatching(drivers, fooy) {
    return drivers.filter(driver => 
      driver.toLowerCase() === fooy.toLowerCase()
    );
}
function fuzzyMatch(drivers, fooy) {
    return drivers.filter(driver =>
      driver.startsWith(fooy)
    );
  }
  function matchName(drivers, fooy) {
    return drivers.filter(driver =>
      driver.name === fooy
    );
  }