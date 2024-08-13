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
//Shows whether an element exists in the array - includes method



