const person = {
    firstName: 'John',
    lastName: 'Doe'
};

let copytyp1 = {...person};

let copytyp2 = JSON.parse(JSON.stringify(person));
const copytyp2 = {
    firstName: 'prem',
    lastName: 'vky'
};
console.log(copytyp2);