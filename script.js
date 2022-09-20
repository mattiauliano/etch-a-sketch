const canva = document.querySelector(".grid");


function createDivs(size) {

    // Set a grid
    canva.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // For loop to create multiple divs
    for (let i=0; i<(size*size); i++) {
        // Add class to squares to see them
        const newSquare = document.createElement("div");
        canva.appendChild(newSquare);
        newSquare.classList.add("showSquare");
        canva.insertAdjacentElement("beforeend", newSquare);
    }
}

createDivs(16)