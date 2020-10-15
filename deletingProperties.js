var nael = {
    name : 'nael',
    procrastination(){
        console.log("nael is procrastinating")
    },
    working(){
        console.log("nael is working")
    },
    studying(){
        console.log("nael is studying ")
    },
    playing(){
        console.log("nael is playing")
    },

}

delete nael['procrastination']
console.log("properties of nael  : ")
for(x in nael){
    console.log(x)
}