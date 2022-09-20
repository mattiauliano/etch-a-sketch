const canva = document.querySelector(".grid");
const input = document.querySelector(".sizes");

// Default grid
canva.style.gridTemplateColumns = `repeat(16, 1fr)`;
canva.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i=0; i<256; i++) {

    // For loop to create divs in canva
    let newSquare = document.createElement("div");
    canva.appendChild(newSquare);
    // Class to see divs (border gray)
    newSquare.classList.toggle("showSquare");
    // Create a brush with an eventListener on new divs
    newSquare.addEventListener("mouseover", () => {
        newSquare.style.backgroundColor = "black";
    })

    canva.insertAdjacentElement("beforeend", newSquare);
}

clear();

// Input sizes
input.addEventListener("click", () => {
    let sizeString = prompt("Modify grid dimensions:");
    let size = Number(sizeString);

    if(size<2 || size>100) {
        alert("Error... Chose a number between 2 and 100!")
    } else {
        removeDivs();
        createDivs(size);
        clear();
    }
})

// Function to create divs on input
function createDivs(size) {

    // Set a variable grid
    canva.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    createAndBrush(size)
}

// For loop to create multiple divs
function createAndBrush(size) {
    let size2 = size*size;

    for (let i=0; i<(size2); i++) {
        
        const newSquare = document.createElement("div");
        canva.appendChild(newSquare);
        newSquare.classList.toggle("showSquare");
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = "black";
        })

        canva.insertAdjacentElement("beforeend", newSquare);
    }
}

// Remove divs once "Grid Sizes" get clicked
function removeDivs() {
    let divsToRemove = document.querySelectorAll(".showSquare")
    divsToRemove.forEach(div => {
        div.remove();
    })
}

// Clear button
function clear() {
    const clear = document.querySelector(".clear");
    const divsToRemove = document.querySelectorAll(".showSquare")
    clear.addEventListener("click", () => {
        divsToRemove.forEach(div => {
            div.style.backgroundColor = "white";
        })
    })
}