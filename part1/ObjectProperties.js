var shape = {
    //defining properties of the object
    //setting data values
    name : 'square',
    sides : 4
  }
  
  //accessing the properties using square brackets
  console.log("Name is:", shape['name']) //using square brackets to access "name"
  console.log("Number of sides are:", shape['sides']) //using square brackets to access "sides"
  

var employee =  {
    name :{
        firstName : 'nael',
        lastName : 'chris'
    },
    age : 29,
    designation :'developer'
}

console.log(employee['name']['firstName'])

//this will iterate all the properties
for(x in employee){
    console.log(x)
}

//lets take a look at method
var nael = {
    eat(){
        console.log("nael is eating")
    },
    sleep(x){
        console.log("nael is sleeping " + x + " times")
    }
}

nael.eat()
nael.sleep(3)
//we can also call the function with square brackets
nael["sleep"](4)