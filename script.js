// ... Your existing code ...
function random1() {
    const rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}
function random2() {
    const rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}
function loadran() {
    const dice = document.getElementById("die");
    dice.src = "./images/" + random1() + ".png"
}
const randload = Math.floor(Math.random() * 2) + 1;
function load() {
    if (randload === 1) {
        btn1.setAttribute("disabled", " ")
        loadran();
    } else {
        btn2.setAttribute("disabled", " ")
        loadran();
    }
}
load();
btn1 = document.getElementById("btn1");
btn1.addEventListener("click", rolldie1);

btn2 = document.getElementById("btn2");
btn2.addEventListener("click", rolldie2);

function rolldie1() {
    let ran1 = random1();
    const dice = document.getElementById("die");
    dice.src = "./images/" + ran1 + ".png"
    btn1.setAttribute("disabled", "");
    btn2.removeAttribute("disabled");
    var initial1 = document.getElementById("p1-id").innerHTML;
    var add1 = parseInt(initial1) + parseInt(ran1);
    document.getElementById("p1-id").innerHTML = add1;
    document.getElementById("h1").innerHTML = "Player-2 to Play"
    if (add1 >= 30) {
        btn1.disabled = true;
        btn2.disabled = true;
        reset.disabled = false;
        const win = document.getElementById("h1");
        win.innerHTML = "player 1 victory 😎😎";

        
    const gifContainer = document.getElementById("gif-container");
     gifContainer.innerHTML = '<img src="images/youre-a-winner-winner.gif" alt="Player 1 Win GIF">';
  
    }
}

function rolldie2() {
    let ran2 = random2();
    const dice = document.getElementById("die");
    dice.src = "./images/" + ran2 + ".png"
    btn2.setAttribute("disabled", "");
    btn1.removeAttribute("disabled");
    var initial2 = document.getElementById("p2-id").innerHTML;
    var add2 = parseInt(initial2) + parseInt(ran2);
    document.getElementById("p2-id").innerHTML = add2;
    document.getElementById("h1").innerHTML = "Player-1 to Play"
    if (add2 >= 30) {
        btn1.disabled = true;
        btn2.disabled = true;
        reset.disabled = false;
        const win = document.getElementById("h1");
        win.innerHTML = "player 2 victory 😎😎";

        
        const gifContainer = document.getElementById("gif-container");
         gifContainer.innerHTML = '<img src="images/youre-a-winner-winner.gif" alt="Player 2 Win GIF">';
      
   
    }
}
const reset = document.getElementById("reset");
reset.disabled = true;
reset.addEventListener("click", () => {
    document.getElementById("p1-id").innerHTML = 0;
    document.getElementById("p2-id").innerHTML = 0;
    const random = Math.floor(Math.random() * 2) + 1
    if (random === 1) {
        btn1.disabled = false;
    } else {
        btn2.disabled = false;
    }
    reset.disabled = true
    if (btn1.disabled == false) {
        document.getElementById("h1").innerHTML = "Player-1 to Play"
    } else {
        document.getElementById("h1").innerHTML = "Player-2 to Play"
    }
})
if (btn1.disabled == false) {
    document.getElementById("h1").innerHTML = "Player-1 to Play"
} else {
    document.getElementById("h1").innerHTML = "Player-2 to Play"
}

