function updateUTCTime() {
  const currentTimeElement = document.getElementById("currentTime");
  const now = new Date();
  const utcTimeString = now.toUTCString();
  currentTimeElement.textContent = `Current UTC Time: ${utcTimeString}`;
}

// Update time immediately and then every second
updateUTCTime()
setInterval(updateUTCTime, 1000)