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

subjects.pop();  //Remove the element of last position (Geography)
console.log(subjects);

console.log(subjects.pop()); //Shows which element removes     


/*---------------------------------------------------------*/

//Remove element - first position - shift method


