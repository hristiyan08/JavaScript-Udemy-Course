
const factsAboutMe = ["Hristiyan", "Yordanov", 15, "Student"]; //The array array can inlude different types of data - e.g: string,int,bool,etc.

const subjects = ["Math", "English", "German", "History"]; //The count starts from 0
console.log(subjects.length) //Shows how many elements the array has

/*---------------------------------------------------------*/

//Add element - last position - push method
subjects.push("Spanish");  //Add spanish - last position
console.log(subjects);

subjects.push("Geography"); //Add geography - last position
console.log(subjects)

/*---------------------------------------------------------*/

//Add  element - first position - unshift method

subjects.unshift("Bulgarian"); //Add bulgarian - first position
console.log(subjects);

subjects.unshift("Chemistry"); //Add chemistry - first position
console.log(subjects);

/*---------------------------------------------------------*/

//Remove element - last position - pop method

subjects.pop();  //Remove Geography - last position
console.log(subjects);

console.log(subjects.pop()); //Shows which element will remove     


subjects.pop();             //Remove spanish - last position
console.log(subjects);

/*---------------------------------------------------------*/

//Remove element - first position - shift method

subjects.shift();        //Remove chemistry - first position 
console.log(subjects);

console.log(subjects.shift()); //Shows which element will remove 

subjects.shift();  
console.log(subjects);

/*---------------------------------------------------------*/
//Shows the index of element - indexOf method

console.log(subjects.indexOf("English"));  //Shows that english is 0 index

console.log(subjects.indexOf("Spanish")); //Spanish is not in the array => it has index -1

/*---------------------------------------------------------*/
//Shows whether an element exists in the array - includes method (boolean value - true or false)


console.log(subjects.includes("Math")); //Math doesn't exist in the array => so the value is false

console.log(subjects.includes("german")); // german doesn't exit but German exists => so the value is false 

console.log(subjects.includes("German"));// German exists in the array => so the value is true

//We can use includes method in conditions

if (subjects.includes("German")){
    console.log("German exists in the subjets array."); 
}
