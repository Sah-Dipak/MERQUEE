let count = 0;
let counterText = document.getElementById("count");

function increment() {
    count++;
    counterText.textContent = count;
    
}

function decrement() {
    count--;
    counterText.textContent = count;
    
}

function reset() {
    count = 0;
    counterText.textContent = count;
    
}