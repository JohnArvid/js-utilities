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



