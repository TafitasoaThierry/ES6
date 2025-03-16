class Car {
    constructor(name) {
        this.name = name;
    }
    carName = () => { /* carName() { ... } */
        return "The car is " + this.name;
    }
}

class Model extends Car {
    constructor(model,name){
        super(name);
        this.model = model;
    }
    carModel(){
        return "Model : " + this.model;
    }
}

const car = new Model("XXX","yyy");
console.log(car.carName());
console.log(car.carModel());
