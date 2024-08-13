//Function declaration:

function ageCalc(birthYear){
    const age = 2024 - birthYear; 
    return `I'm ${age} years old.`
}

console.log(ageCalc(2008));


//Function expression:

const ageFunction = function ageCalc(birthYear){
    const age = 2024 - birthYear;
    return `I'm ${age} years old.`
}

console.log(ageCalc(2008));

//Arow function:

const ageFunction2 = (birthYear) => `I'm ${2024-birthYear} years old.`;
console.log(ageFunction2(2008));