let store = {drivers: [], passengers:[], trips:[]}

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    
    store.drivers.push(this)
  }
  
  trips() {
     
  }
  passengers(){
    
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
    
  }
  drivers() {
    
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driver = new Driver()
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.passenger = new Passenger()
    
    store.trips.push(this)
  }
  
  driver() {
    
  }
  
  passenger() {
    
  }
}