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

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)
// header.setAttribute("class", "my-header")

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "Created by me"
// subHeader.setAttribute("class", "my-subHeader")
// document.body.appendChild(subHeader)



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

const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!