// switch(expression){
//     case value1:
//         statement1;
//         statement2;
//         break;
//     case value2:
//         statement3;
//         statement4;     
//         break;
// }

let getStarFromUser = "2"
starInNumber = parseInt(getStarFromUser)

switch (starInNumber) {
    case 1:
        console.log ("Poor");
        //break;
        break;
    case 2:
        console.log ("Emm ok");
        //break;
    case 3:
        console.log ("Average"); 
        break;   
    case 4:
        console.log ("Cool");
        break;
    case 5:
        console.log ("Super");  
        break;                   
    case 6:
        console.log ("Awesome"); 
        break;
    case 7:
        console.log ("Delicios, you nailed it");
        break;
    default:
        console.log ("This rating is not in our system");     
}


// For newer languages, they do not have automatic fall through like in JS.