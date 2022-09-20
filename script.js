const canva = document.querySelector(".grid");
const input = document.querySelector(".sizes");

// Default grid
canva.style.gridTemplateColumns = `repeat(16, 1fr)`;
canva.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i=0; i<256; i++) {
        
    const newSquare = document.createElement("div");
    canva.appendChild(newSquare);
    // Add class to squares to see them
    newSquare.classList.add("showSquare");

    canva.insertAdjacentElement("beforeend", newSquare);
}


// Input sizes
input.addEventListener("click", () => {
    let sizeString = prompt("Modify grid dimensions:");
    let size = Number(sizeString);

    if(size<2 || size>100) {
        alert("Error... Chose a number between 2 and 100!")
    } else {
        removeDivs();
        createDivs(size);
    }
})

function createDivs(size) {

    // Set a grid
    canva.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // For loop to create multiple divs
    let size2 = size*size;
    for (let i=0; i<(size2); i++) {
        
        const newSquare = document.createElement("div");
        canva.appendChild(newSquare);
        // Add class to squares to see them
        newSquare.classList.add("showSquare");

        canva.insertAdjacentElement("beforeend", newSquare);
    }
}

function removeDivs() {
    let divsToRemove = document.querySelectorAll(".showSquare")
    divsToRemove.forEach(div => {
        div.remove();
    })
}

