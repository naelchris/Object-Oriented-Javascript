var person = {
    name : "nael",
    age :20,
    hobby : {
        hobby1 : "coding",
        hobby2 : "reading",
        hobby3 : "business & investing",
        hobby4 : "palying"
    },
    changeHobby(data) {
        this.hobby.hobby4 = data
        return data
    }

}

console.log("hobby 4 : " + person.hobby.hobby4)
console.log("hobby 4 : "+ person.changeHobby("hangouts"))


