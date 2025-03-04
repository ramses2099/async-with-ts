import { add, subtract } from "./src/math";

(function(){
    try{

        const sum = add(205,250);
        console.log(`Sum: ${sum}`);

        const rest = subtract(205,250);
        console.log(`Rest: ${rest}`);

    }catch(err: Error | any){
        console.error(err.message);
    } 
})();




