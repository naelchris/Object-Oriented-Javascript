function CreateSusObject(name){
    return { 
        name: name,
        color: name.split(' ')[1],
        speak() {console.log(`my Name is ${name}`);}
    }
}

const suspectName = ["nael white", "julio Orange", "Felix blue"]

const newObj = suspectName.map(CreateSusObject)

console.log(newObj)