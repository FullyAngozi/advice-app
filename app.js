//selectors
const advice_id = document.querySelector(".advice_id");
const button = document.querySelector(".icon");

 

const API_URL = "https://api.adviceslip.com/advice";



//event listeners



//functions

async function start() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { id, advice } = data.slip;
    console.log(id, advice);
    document.querySelector(".main_advice").textContent = advice;
    document.querySelector(".advice_id").textContent = id;
    
}

button.addEventListener("click", start);

