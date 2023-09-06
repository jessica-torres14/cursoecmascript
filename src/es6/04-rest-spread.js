/* arrays destructuring */

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

// Object destructuring 

let user = { username: 'Oscar', age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);

/* Spread operator */

let person = { name: 'Oscar', age: 28 };
let country = 'Colombia';

let data = { id: 1, ...person, country };
console.log(data);

/* rest */
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(6, 3, 2, 3)




function solution(json1, json2) {
    json1 = { name: "Mr. Michi", food: "Pescado" },
    json2 = { age: 12, color: "Blanco" }
    return { ...json1, ...json2 }
}
console.log(solution());
/* ----- */
export function solution2(
    json1 = { name: 'Mr. Michi', food: 'Pescado' },
    json2 = { age: 12, color: 'Blanco' }) {
    return { ...json1, ...json2 };
}


