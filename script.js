const canva = document.querySelector(".grid");
const input = document.querySelector(".sizes");

// Default settings

// Default grid dimensions
canva.style.gridTemplateColumns = `repeat(16, 1fr)`;
canva.style.gridTemplateRows = `repeat(16, 1fr)`;

// Create multiple cells to fill the default gird area
for (let i=0; i<256; i++) {
    let newSquare = document.createElement("div");

    canva.appendChild(newSquare);
    // Show new cells with a gray border
    newSquare.classList.toggle("showSquare");
    // Create a "Brush" with an event listener on added cells (change background color)
    newSquare.addEventListener("mouseover", () => {
        newSquare.style.backgroundColor = "black";
    })
}

// Call a function to clear the grid by clicking on "Clear" button
clear();

// Make the grid variable by adding an event listener on "Grid Sizes" button
input.addEventListener("click", () => {
    let sizeString = prompt("Modify grid dimensions:");
    // Convert in number the string input
    let size = Number(sizeString);

    // Alert to create a range of input selection
    if(size<2 || size>100) {
        alert("Error... Chose a number between 2 and 100!")
    } else {
        removeDivs();
        createDivs(size);
        clear();
    }
})

// Functions

// Create a variable grid based on size entered by the user
function createDivs(size) {
    canva.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // Call a function to create variable cells in grid and the "Brush feature"
    createAndBrush(size)
}

function createAndBrush(size) {
    let size2 = size*size;

    for (let i=0; i<(size2); i++) {
        const newSquare = document.createElement("div");

        canva.appendChild(newSquare);
        newSquare.classList.toggle("showSquare");
        // Brush feature
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = "black";
        })
    }
}

// Remove older cells to avoid adding them to the new ones (once "Grid Sizes" got clicked)
function removeDivs() {
    // Selecting cells with class ".showSquare"
    let squaresToRemove = document.querySelectorAll(".showSquare")
    // For each cells call remove method
    squaresToRemove.forEach(div => {
        div.remove();
    })
}

// Clear button
function clear() {
    // Selecting "Clear" button and cells to clear
    const clear = document.querySelector(".clear");
    const squaresToClear = document.querySelectorAll(".showSquare")

    // For each cells to clear, once "Clear" button get clicked, set background color to white
    clear.addEventListener("click", () => {
        squaresToClear.forEach(div => {
            div.style.backgroundColor = "white";
        })
    })
}