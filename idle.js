const intervalID = setInterval(myCallback, 500*60);
const button = document.createElement('button');

document.body.appendChild(button);
document.body.lastChild.addEventListener('click', clickHandler());




function myCallback() {
  document.body.lastChild.click();
}


function clickHandler() {
  console.log("idle");
}
