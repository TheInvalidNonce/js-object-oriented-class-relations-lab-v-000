let store = {drivers: [], passengers:[], trips:[]}

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    
    store.drivers.push(this)
  }
  
  trips() {
    // returns all of the trips that a driver has taken
     return store.trips.filter(el => { // Find all trips
       return el.driverId === this.id // That match this(driver).id
     })
  }
  passengers() {
    // returns all of the passengers that a driver has taken on a trip
    return this.trips().map(el => { // Map all (Driver).trips()
      return el.passenger() // Returning each (trips).passenger()
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    
    store.passengers.push(this)
  }
  
  trips() {
    // returns all of the trips that a passenger has taken
    return store.trips.filter(el => { // Find all trips
      return el.passengerId === this.id // That match this(passenger).id
    })
  }
  drivers() {
    // returns all of the drivers that has taken a passenger on a trip
    return this.trips().map(el => { // Map all (Passenger).trips()
      return el.driver() // Returning each (trips).driver()
    })
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    
    store.trips.push(this)
  }
  
  driver() {
    // returns the driver associated with the trip
    return store.drivers.find(el => { // Find the specific driver
      return el.id === this.driverId  // Whose driver.id === this(trip).driverID
    })
  }
  
  passenger() {
    // returns the passenger associated with the trip
    return store.passengers.find(el => { // Find the specific passenger
      return el.id === this.passengerId // Whose passenger.id === this(trip).passengerId
    }) 
  }
}