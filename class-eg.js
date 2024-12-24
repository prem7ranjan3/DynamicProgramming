class Sams {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    hello(params) {
        console.log(params);
    }
    world(params){
        console.log(params);
    }
}

const s = new Sams();
s.hello('prem');
s.world(34);