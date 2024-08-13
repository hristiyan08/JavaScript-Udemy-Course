
const factsAboutMe = {
     firstName: "Hristiyan",
     lastName: "Yordanov",
     age: 15, 
     job: "programmer"
}


const name = factsAboutMe.firstName;  //Dot Notation 
console.log(name);

const lastName = (factsAboutMe["lastName"]); //Bracket Notation
console.log(lastName);

const nameKey = "Name";
const firstName = (factsAboutMe["first" + nameKey]);
console.log(firstName);

const lastName2 = (factsAboutMe["last" + nameKey]);
console.log(lastName2);

console.log(`My name is ${factsAboutMe.firstName + " " + factsAboutMe.lastName}. I'm ${factsAboutMe.age} years old and also I'm a ${factsAboutMe.job}.`);