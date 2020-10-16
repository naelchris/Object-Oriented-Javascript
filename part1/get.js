var employee = {
  
    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function returning designation of the employee
    display() {
      return this.designation //using this to refer to the "employee" object
    }
}
//this will display the designation
console.log(employee.display())

/*Here, the function display() was being used to get the value of the property designation. Another way to do this is by using the get keyword.*/

var person = {
    name : "nael",
    work : "Developer",
    get hisName(){
        return this.name
    },
    set job(data){
        this.work = data
    }
}
console.log(person.hisName)
