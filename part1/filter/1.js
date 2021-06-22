// _.filter(arr, callback){
//     //do something
// }

// ex : we are going to want to filter by those who were present, but first we need to write our filter function

const _ = {};

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