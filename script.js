


// Get the button element

const keyValue = 'abc';


const actionUrl = 'https://apis.sithum.tk/visitors/increment?key=abc';
const method = 'POST';

// Send the request using Fetch API


fetch(actionUrl, { method })
    .then(response => {
        if (response.ok) {
            console.log('Request succeeded');
           
    
            // Perform any additional actions on successful request
        } else {
            console.log('Request failed');
            // Handle the error case
        }
    })
    .catch(error => {
        console.log('An error occurred', error);
        // Handle the error case
    });

   
    



var counter = 3;
var counter_2 = 8;
// get the body element
const body = document.body;

// change the background color to blue




setInterval(function() {
    counter--;
    if(counter < 0) {
        document.getElementById("lode").style.display = "none";
        body.style.backgroundColor = 'blue';
        document.getElementById("lode-2").style.display = "block";
        document.getElementById("fondo").style.display = "block";
        
    } 
    

}, 1000);




var myDots = document.getElementsByClassName("dotContenedor");
var izqParte = document.getElementById("izqParte");
var derParte = document.getElementById("derParte");

setTimeout(function () {
    document.getElementById("dotGrupo").style.opacity = 1;

    setInterval(bottomFunc, 1500);
    setInterval(animations, 6000);
    animations();
    var amount = 0;

    function bottomFunc() {
        amount++;
        var result = "";

        for (let i = 0; i < (amount % 3) + 1; i++) {
            result += ".";
        }

        document.querySelectorAll("#textoAbajo > p")[0].innerHTML = "Welcome" + result;
    }

    function animations() {
        izqParte.style.opacity = 1;
        derParte.style.opacity = 1;

        derParte.style.animation = "none";
        derParte.offsetHeight;
        derParte.style.animation = null;
        derParte.style.animation = "4s derParteAni 1.6s step-start";

        izqParte.style.animation = "none";
        izqParte.offsetHeight;
        izqParte.style.animation = null;
        izqParte.style.animation = "3.8s izqParteAni 0s step-start";

        for (let j = 0; j < myDots.length; j++) {
            myDots[j].style.animation = "none";
            myDots[j].offsetHeight;
            myDots[j].style.animation = null;
            myDots[j].style.animation = "2s AllCirculos " + j * 0.375 + "s cubic-bezier(0.2,0.95,0.75,0.2), 2s AllCirculos2 " + (2 + j * 0.375) + "s cubic-bezier(0.2,0.65,0.75,0.2) forwards";
        }
    }
}, 3000);
setInterval(function() {
    counter_2--;
    if(counter_2 < 0) {
        
        document.getElementById("lode-2").style.display = "none";
        document.getElementById("fondo").style.display = "none";
        document.getElementById("Home").style.display = "block";
        
    } 
    

}, 1000);
