function CreateSusObjects(name){
    return {
        name:name,
        color: name.split(" ")[1],
        speak(){
            console.log("my name is ", name);
        }
    };
};

var suspects = ['miss scarlet' , 'Colonel Mustard', 'Mr. White']

var suspectList = [];

for(var i = 0 ; i < suspects.length ; i++){
    suspect = CreateSusObjects(suspects[i])

    suspectList.push(suspect)
}

const _ = {}

_.each(suspects, function(name){
    suspectsList.push(CreateSusObjects(name))
})

