// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const logDriversbyHometown = function(drivers, location) {
    drivers.forEach(function(driver) {
      if (driver.hometown === location) {
        console.log(driver.name)}
    })
}