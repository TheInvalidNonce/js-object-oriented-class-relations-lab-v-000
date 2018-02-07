let store = {drivers: [], passengers:[]}

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
  }
  
  trips() {
    
  }
  drivers() {
    
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.driver = new Driver()
    this.passenger = new Passenger()
  }
}