function validateHello(greetings) {
    if (greetings.toLowerCase().includes('hello')) {
        return true
    } else if (greetings.toLowerCase().includes('ciao')) {
        return true
    } else if (greetings.toLowerCase().includes('salut')) {
        return true
    } else if (greetings.toLowerCase().includes('hallo')) {
        return true
    } else if (greetings.toLowerCase().includes('hola')) {
        return true
    } else if (greetings.toLowerCase().includes('ahoj')) {
        return true
    } else if (greetings.toLowerCase().includes('czesc')) {
        return true
    } else {
        return false
    }

}
// if(greetings.includes('hallo ')){
//     return true
// }
// if(greetings.includes('hola')){
//     return true
// }
//
// if(greetings.includes('czesc ')){
//     debugger
//     return true
// }




console.log(validateHello('czecsc'))//true