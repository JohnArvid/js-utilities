const intervalID = setInterval(myCallback, 1000 * 60);
const button = document.createElement('button');
document.body.appendChild(button);
document.body.lastChild.addEventListener('click', clickHandler);

function myCallback() {
  document.body.lastChild.click();
}
function clickHandler() {
  console.log("idle");
}




//rewrite with wakelock
console.log("Loaded at " + new Date(Date.now()));
const intervalID = setInterval(myCallback, 1000 * 60);
const root = document.getElementById('root');
root.lastChild.addEventListener('click', clickHandler);

function myCallback() {
  root.lastChild.click();
}
function clickHandler() {
  location.reload();
}
