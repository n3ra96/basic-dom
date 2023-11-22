// console.log(document)
// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)
// down.innerHTML = "Down"

// playingField.style.backgroundColor = 'blue'
// const ball = document.getElementById("ball")
// ball.style.backgroundColor = "yellow"

///8

// const moveRight = function(){
//     let newLeft = parseInt(document.getElementById("ball").style.left)
//     if(newLeft >=0 ){
        
//     }else{
//         newLeft = 0
//     }
//     let fifteenplus = parseInt(newLeft)
//     fifteenplus += 15
//     str =  `${fifteenplus}px`
//     document.getElementById("ball").style.left = `${fifteenplus}px`

//   }
//   moveRight()


/////9

// const box = document.createElement("h1")
// box.innerHTML = "The Best Game Ever"
// box.style.color = "#c0392b"
// box.style.fontFamily = "Helvetica"
// document.body.appendChild(box)
// box.setAttribute("class", "my-box")

// const subbox = document.createElement("h2")
// subbox.innerHTML = "Created by me"
// subbox.setAttribute("class", "my-subbox")
// document.body.appendChild(subbox)



//// 11. Events

// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const changeColor = function () {
//     box.style.backgroundColor = "#8e44ad"
//     box.innerHTML = "OH! You Changed Me!"
// }
  



///13. Spot Check 6


///14. Events II

// const box = document.createElement("div") // dynamically creating an element

// box.setAttribute("class", "box")
// box.onclick = function(){       // adding an event to the new element
//     box.innerHTML = "I'm alive!"
// }

// document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!


// Exercise 2


// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//   function checkReservation(){
//    const name = document.getElementById("client").value
//    let lowername = name.toLowerCase()
//    let keys = Object.keys(reservations)

//     for( let key in keys){
//         if ( keys[key].toLowerCase() == lowername){
//             lowername = keys[key]
//         }
//     }
    
//     if ( lowername in reservations  ){
//         if( reservations[lowername].claimed == false ){
//             alert(`Welcome, ${lowername}`)
//         }else{
//             alert('Hmm, someone already claimed this reservation')
//         }

//     }else{
//         alert('You have no reservation')
//         reservations[name] = {claimed: false}

//     }
//   }


// Exercise 3


// for(let i = 0 ; i < 50; i++){
//     const box = document.createElement("div")
//     box.setAttribute("class", "box")
//     document.getElementById("container").appendChild(box)
//     box.onmouseleave = function () {
//         const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     box.style.backgroundColor = niceColors[randomPosition];
//   }

// }


//Exercise 4 - Form


    
    

