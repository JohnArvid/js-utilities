
let wakeLock = null;

const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request();
    wakeLock.addEventListener('release', () => {
      console.log('Screen Wake Lock released:', wakeLock.released, 'at ', new Date(Date.now()));
    });
    console.log('Screen Wake Lock released:', wakeLock.released, 'at ', new Date(Date.now()));
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};

await requestWakeLock();

//Release lock after 5 s
/*
window.setTimeout(() => {
  wakeLock.release();
  wakeLock = null;
}, 5000);

*/



/*
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
*/



/*
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
*/