const {process01, process02} = require("./processes");

async function main(){
    
    try{
        console.log("Totall Running Time");
        const value01 = await process01();
        const value02 = await process02();
    
        console.log("Process 01 Returned: ", value01);
        console.log("Process 02 Returned: ", value02);
    
        console.log();

        console.timeEnd("Total Running Time");
    } catch(error){
        console.error("error", error);
    }
        
}