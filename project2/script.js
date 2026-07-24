const quotes = [
    "💲250" , "💲300" , "💲400" , "💲410" , "💲500"
]


        
const quote=document.getElementById("one");

const button=document.getElementById("two");
button.onclick=function(){
    const rindex=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[rindex];
}