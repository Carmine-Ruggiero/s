const hrs = document.getElementById("hrs");
const mnt = document.getElementById("mnt");
const scnd = document.getElementById("scnd");

function aggiornaOrologio() {
  const hours = new Date();
  
  hrs.textContent = hours.getHours().toString().padStart(2, "0");
  mnt.textContent = hours.getMinutes().toString().padStart(2, "0");
  scnd.textContent = hours.getSeconds().toString().padStart(2, "0");
  
  requestAnimationFrame(aggiornaOrologio);
}

aggiornaOrologio();