// let gridContainer = document.querySelector("#grid-container"); //# for id, . for class






// function createGrid(size = 16) {
//     let widerness = 300;
//     gridSize = Math.floor(widerness / size);


//     for (let rows = 0; rows < size; rows++) {
//         const rowContainer = document.createElement('div');
//         rowContainer.style.cssText = "display: flex; flex-direction: row; align-items: center; max-width: auto; gap= 15px;";
//         for (let cols = 0; cols < size; cols++) {

//             const content = document.createElement('div');
//             // content.style.cssText = "font-size: 10px";
//             content.classList.add('gridElement');


//             rowContainer.appendChild(content);
//         }
//         gridContainer.appendChild(rowContainer);
//     }
 
    
//     let myStyle = `width: ${gridSize}px; height: ${gridSize}px;`;
//     console.log(myStyle, typeof myStyle);
    

//     const gridElems = document.querySelectorAll(".gridElement");

//     gridElems.forEach((singleElement) => {
//         singleElement.setAttribute("style", myStyle);
//         singleElement.addEventListener('mouseenter', (e) => {
//             e.target.classList.add("activeGridElement");
//         });
//     });

// }




// createGrid()

// const changeBtn = document.querySelector("#changeNumberBtn");
// changeBtn.addEventListener('click', () => {
//     document.querySelectorAll(".gridElement").forEach(el => el.remove());
//     let size = prompt("Please enter number of squares per side for the new grid (max 100)!");
//     if (size < 8){
//         size = 8;
//     } else if (size > 100) {
//         size = 100;
//     }
//     createGrid(size);
// });



let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = function (operator, a,b) {
    return operator(a, b);
}


const clearBtn = document.querySelector("#clear");
const display = document.querySelector("#display");
const digitBtns = document.querySelectorAll(".digit");

let displayValue = '';
let opeartion = NaN;

clearBtn.addEventListener('click', () => {
    displayValue = '';
    
    display.textContent = displayValue;    
});

let addDigit = function (n) {
    if (displayValue === '') {
        displayValue = Number(n);
    } else {
        tmp = displayValue.split('');
        tmp.push(n)
        displayValue = tmp.join('');
    }
}




digitBtns.forEach((digitBtn) => {
    digitBtn.addEventListener('click', (e) => {
        display.textContent = e.target.textContent;
        // e.target.classList.add("activeGridElement");
    });
});