// _.map([12,3,4], function(v,i,list){console.log(v)})
// producs a new array of values by mapping each value in list through a transformation fucntion(iterator)
// each invocation of iterator is called with three arguments (elements, index, list)
// if list is a javascript object, iterator arguments will be (value, key, list)
// note : you need to import underscore.js 

const weapons = ['candle stick','lead pipe', 'machine gun']

const makeBroken = function(item){
    return `broken ${item}`
}

//underscore.js
//_.map(weapons, makeBroken) //broken candle stick, broken lead pipe, broken machine gun

x = weapons.map(makeBroken)
// [ 'broken candle stick', 'broken lead pipe', 'broken machine gun' ]

console.log(x)