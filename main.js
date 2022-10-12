// console.log('Hello world');
// console.error('This is an error');
// console.warn('This is a warning');

//let , const  

// let score;
// score = 10; 

// console.log(score);

// you cant do that with const only with let 
// the main permitted data types 

// const rating =4.5;
// const isCool = true;
// const x = null;
// const y =undefined;
// let z;
// const name ='John';
// const age = 30;

// // concatenation 
// console.log('My name is '+ name + ' and i am ' +age);

// // Template string 
// const hello = `My name is ${name} and i am ${age}`
// console.log(hello);
 
// const s = 'technology, it, code, computers'  ;
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(' , '));

// arrays -variable that hold multiple values 
// const numbers = new Array(1,2,3,4,5);
// const fruits = ['apples','oranges','pears'];
// fruits[3]='grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('oranges'))
// console.log(fruits)


// objects 
const person ={ 
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'oslo',
        state:'MA'
    }
}
//  first method 
// console.log(person.address.city );
// const { firstName, lastName , address: {city}} = person;
// // second way 
// console.log(city);

person.email = 'john@gmail.com';
console.log(person);