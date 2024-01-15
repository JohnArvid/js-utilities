
let wakeLock = null;

const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request();
    wakeLock.addEventListener('release', () => {
      console.log('Screen Wake Lock off at ', new Date(Date.now()));
    });
    console.log('Screen Wake Lock on at ', new Date(Date.now()));
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};

export default async function lock() {
  await requestWakeLock();
}