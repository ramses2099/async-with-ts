import { PartialStartShip, StartShip, StartShipRecord, Todo } from "./src/utility-types";


// Partial<Type>
const updateStartShip = (id: number, ship: PartialStartShip)=>{};

// Required<Type>

const updateStartShipRequired = (id: number, ship: Required<StartShip>)=>{};

// Record<Type>

const startShipRecord: StartShipRecord = {
    Explore1:{
        name: "Starship Alpha",
        enableHyperjump: false,
    }
}

// Reonly<Type>
const todo: Readonly<Todo> = {
    title: "Clean the house",
};

(async function(){
    try{
        updateStartShip(1,{
            name: "Starship Alpha",
        });

        updateStartShipRequired(2,{
            name: "Starship Beta",
            enableHyperjump: true,
           maxSpeed: 1000,
        });

        // Todo Readonly
        // todo.title = 'juan';

        // StartShipRecord
        console.log(startShipRecord.Explore1.name);


    }catch(err: Error | any){
        console.error(err.message);
    } 
})();




