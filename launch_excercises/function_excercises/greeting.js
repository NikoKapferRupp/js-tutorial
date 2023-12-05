/* greetingMessage = "Good Morning!";

function greetPeople() {
    console.log(greetingMessage);    
}

function changeGreetingMessage(newMessage) {
    greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople();
*/
function greetPeople(greetingMessage = "Hello!") {
    console.log(greetingMessage);
}

greetPeople("Good Morning!"); 
