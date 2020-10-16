/*
creating object with {}
var objectName = {
    properties1 : propertiesValue,
    priperties2 : propertiesValue2,
    functionName(){

    }
}
*/

//creting object employee
var employee = {
    name: {
        firstName : "nael",
        lastName : "chris"
    },
    age: 20,
    destination : 'Developer',
    displayName(){
        console.log(this.firstName)
        console.log(this.lastName)
    }
}

employee.displayName()
console.log(employee.age)
console.log(employee.destination)




/* ---------------------------------------------------
creating object with new
note : Object() is a build in function to create object
Object() has no arguments passed to it, it will create an empty object whose properties will then need to be defined.

ytax :
var objectName = new Object()
*/

var employeeObject = new Object()
employeeObject.name = "nael"
employeeObject.age = 29
employeeObject.destination = "developer"

//sytanx function 1
employeeObject.display = function() {
    console.log(employeeObject.age)
}

//sytanx function es6
employeeObject.getName = () => {
    console.log(employeeObject.name)
}

console.log(employeeObject.age )
console.log(employeeObject.destination)



/* ---------------------------------------------------
create() Method
create() allows the creation of a new object based on an existing one.
sytanx :
var newObject = Object.create(existingObject)
*/


var newObject = Object.create(employee)


//displaying the properties of the object assistantManager
//the method to access properties will be discussed in detail the next lesson 
assistantManager.displayName()
console.log("Age is:",assistantManager.age)
console.log("Designation is:",assistantManager.designation)
//displaying the properties of the object employee2
//this will show the same values as that of object employee1
manager.displayName()
console.log("Age is:",manager.age)
console.log("Designation is:",manager.designation)

// we can also use cons object

const ObjectEmployee = {
    name : "nael",
    age : 29,
    job : "developer"
}

//note const doesn't allow the object identity to be change




