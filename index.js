let store = {drivers: [], passengers:[]}



class Driver {
  let driverId = 0;
  
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

class Passenger {
  constructor(name)
}