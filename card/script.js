
    const container = document.getElementById("container")
    const result = document.getElementById("result")

    function updateCount(){
      result.innerText = "Total Students : " + container.children.length
    }
    updateCount()

    // Delete Button Function
    const deleteButton = document.querySelectorAll(".deleteBtn")
    for(let button of deleteButton){
       button.addEventListener("click", function(e) {
        this.closest(".card").remove()
        updateCount()
       })
    }
    // favorite Button Function
    const favCard = document.querySelectorAll(".favoriteBtn")
    for(let button of favCard){
      button.addEventListener("click", function(e){
        this.closest(".card").classList.add("fav")
      })
    }
    // next Button Function
    const nextBtn = document.querySelectorAll(".nextBtn")
    for(let button of nextBtn){
      button.addEventListener("click", function(e){
        let currentCard = this.closest('.card')
        let nextCard = currentCard.nextElementSibling
        if(nextCard){
          alert(`Next Student : ${nextCard.children[0].textContent}`)
        }else{
          alert("No Next Student.")
        }
      })
    }
    const prevBtn = document.querySelectorAll(".prevBtn")
    for(let button of prevBtn){
      button.addEventListener("click",function(){
        let currentCard = this.closest(".card")
        let prevCard = currentCard.previousElementSibling
        if(prevCard){
          alert(`Previous Student : ${prevCard.children[0].textContent}`)
        }
        else{
          alert("No Previous Student.")
        }
      })
    }
    document.getElementById("firstBtn").addEventListener("click",function(e){
      alert(container.firstElementChild.textContent)
    })
    document.getElementById("lastBtn").addEventListener("click", function(e){
      alert(container.lastElementChild.textContent)
    })
