export interface StartShip{
    name: string;
    enableHyperjump:boolean;
    maxSpeed?: number;
}

export interface Todo{
    title: string;
}

// Partial<Type>
// Constructs a type with all properties of Type set to optional. 
// This utility will return a type that represents all subsets of a given type.
export type PartialStartShip = Partial<StartShip>;

// Required<Type>
// Constructs a type consisting of all properties of Type set to required. 
// The opposite of Partial.
export type RequiredStartShip = Required<StartShip>;

// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, 
// meaning the properties of the constructed type cannot be reassigned.
export type ReadonlyTodo = Readonly<Todo>;

// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
export type StartShipRecord = Record<string, StartShip>;