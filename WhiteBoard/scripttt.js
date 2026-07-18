const canvas = document.getElementById('paintCanvas')
const ctx = canvas.getContext('2d')
const clearBtn = document.getElementById('clearBtn')

//Drawing state
let isDrawing = false;
let brushColor = '#a6a8af'
let brushWidth=5

canvas.addEventListener('mousedown',(event)=>{
    isDrawing=true
    ctx.beginPath()
    ctx.moveTo(event.offsetX,event.offsetY)
})

canvas.addEventListener('mouseup',()=>{
    isDrawing=false
    ctx.closePath()
})

canvas.addEventListener('mousemove',(event)=>{
    if(!isDrawing) return

    ctx.lineWidth=brushWidth
    ctx.lineCap='round'
    ctx.strokeStyle=brushColor

     ctx.lineTo(event.offsetX,event.offsetY)
     ctx.stroke();
})

canvas.addEventListener('mouseleave',()=>{
    isDrawing=false
})

canvas.addEventListener('mouseenter',()=>{
    console.log("You can draw")
})

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

canvas.addEventListener('dblclick',()=>{
    const randomBg =`hsl(${Math.random()*360},80%,90%)`
    canvas.style.backgroundColor=randomBg
})

canvas.addEventListener('contextmenu' , (event)=>{
    event.preventDefault()

    const colors = [ "#f3f3" , "rgba(180, 180, 48, 0.33)" , "rgba(146, 117, 146, 0.33)" , "#f34"][Math.floor(Math.random()*4)]
     brushColor = colors
    alert (`brush color change to : ${brushColor}`)
})

