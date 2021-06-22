const data = [
    {
        name:"nael",
        present:true
    },
    {
        name:"raju",
        present: true
    },
    {
        name:"lowin",
        present:false
    }
]

const _ = {}


_.filter = function(arr, callback){
    //create new array
    const storage = [];
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //check if callback return true
        if(callback(arr[i],i,arr) === true){
            storage.push(arr[i])//if returns true, push into array
        }
        
    }
        
    //return arr
    return storage
}

_filter(data, function(suspectObject){
    return suspectObject.present;
})