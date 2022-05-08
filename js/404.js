let x = 0
let y = 1
let z = .2;
let a = 0;

const da = .3;

let increment = 0

const frameRate = 60;
const frameInterval = 1/frameRate;

const main = document.querySelector("main");
const error = document.querySelector(".error");

function animate(){
    error.style.transform = `rotate3D(${x},${y},${z},${a}deg)`
    a += da;
    increment+=.01;
    x = Math.sin(increment);
    y = Math.cos(increment);
    z = (Math.sin(increment) + Math.cos(increment))/2;

}

setInterval(animate, frameInterval)

