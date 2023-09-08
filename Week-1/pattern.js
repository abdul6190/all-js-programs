/* Pattern-1
*
**
***
****
*****
*/

var user1 = {
    name:'abdul',
    age:24,
    email:'test@gmail.com',
    phoneno:9845662342
}
var fruits = ['Apple', 'Mango', 'Banana', 'Orange']; // arrays

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

var users = [
    {name:"Rohit", age:30},
    {name:"Virat", age:33},
    {name:"Dhoni", age:35},
];

// for(let i=0; i < users.length; i++){
//     console.log('User name is '+ users[i].name + ' and age is ' + users[i].age);
// }

function printAllUsers(users){
    for(let i=0; i < users.length; i++){
        console.log('User name is '+ users[i].name + ' and age is ' + users[i].age);
    }
}

printAllUsers(users);