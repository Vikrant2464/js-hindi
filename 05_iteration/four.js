
//************for in loop on objects *********/

//for itrating object we use ***for in*** loop
/*

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift for apple"
}

for (const key in myObject) {
    //console.log(key);          //use only for key
   // console.log(myObject[key]);   //use only for value
   console.log(`${key} shortcut is for ${myObject[key]}`);
}

*/

//****************************************************/
//EX-2

/*
const partsOfComputer = {
    CPU: 'central processing unit',
    RAM: 'random access memory',
    ROM: 'read only memory',
    ALU: 'arithematic and logic unit',
    CU: 'control unit',
    VDU: 'visual display unit'
}

for (const key in partsOfComputer) {
   console.log(`${key} short form is for ${partsOfComputer[key]}`);
}
*/

//EX-3

const stateCapitals ={
    UttarPradesh: 'New Delhi',
    AndhraPradesh: 'Amarawati',
    ArunachalPradesh: 'Itanagar',
    Asam: 'Dispur',
    Bihar: 'Patna',
    Chhattisgarh: 'Raipur',
    Goa: 'Panji',
    Gujrat: 'Gandhinagar',
    Haryana: 'Chandigarh',
    HimachalPradesh: 'Simla',
    Jharkhand: 'Ranchi',
    Karnataka: 'Bengaluru',
    Kerala: 'Thiruvananthapuram'
}

for (const key in stateCapitals) {
   // console.log(`${key} is the capital of state ${stateCapitals[key]}`);
}

//******************for in loop in arrey***********************************/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(programming[key]);
}
