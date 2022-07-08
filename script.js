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



let add = (a, b) => {
    console.log(a, b, a+b);
    return Number(a) + Number(b);
}
let subtract = (a, b) => Number(a) - Number(b);
let multiply = (a, b) => Number(a) * Number(b);
let divide = (a, b) => Number(a) / Number(b);

let operate = function (operator, a, b) {
    return operator(a, b);
}

const digitBtns = document.querySelectorAll(".digit");
const opeartionBtns = document.querySelectorAll(".operation")

const clearBtn = document.querySelector("#clear");
const display = document.querySelector("#display");

// const substractBtn = document.querySelector("#substract");
// const multiplyBtn = document.querySelector("#multiply");
const equalsBtn = document.querySelector("#equals");
// const devideBtn = document.querySelector("#devide");
// const addBtn = document.querySelector("#add");

let displayValue = '';
let operation = '';
let firstVal = '';
let ready = true;

let refreshDisplay = () => display.textContent = displayValue;

let disableOperations = function () {
    operation = '';
    opeartionBtns.forEach((operationBtn) => {
        operationBtn.classList.remove("activeGridElement");
    });
}



clearBtn.addEventListener('click', () => {
    ready = true;
    displayValue = '';
    firstVal = '';
    disableOperations();
    refreshDisplay();
});



equalsBtn.addEventListener('click', () => {
    if (displayValue != '' && firstVal != '' && operation != '' && ready == true) {
        displayValue = operate(operation, firstVal, displayValue)
        ready = false
    }
    refreshDisplay();
    displayValue = '';
 opeartion = '';
firstVal = '';
});

let addDigitToDisplay = function (digit) {
    let tempVal = displayValue.split('');
    tempVal.push(digit);
    displayValue = tempVal.join('');
}

digitBtns.forEach((digitBtn) => {
    digitBtn.addEventListener('click', (e) => {
        addDigitToDisplay(e.target.textContent);
        // displayValue = e.target.textContent;
        refreshDisplay();
    });
});

opeartionBtns.forEach((operationBtn) => {
    operationBtn.addEventListener('click', (e) => {
        if (displayValue != '' && operation == '') {
            // disableOperations();
            e.target.classList.add("activeGridElement");;
            let operationTxt = e.target.textContent;
            switch (operationTxt) {
                case '+':
                    operation = add;
                    break;
                case '-':
                    operation = subtract;
                    break;
                case '*':
                    operation = multiply;
                    break;
                case '/':
                    operation = divide;
                    break;
            }
            firstVal = displayValue;
            displayValue = '';
        }

    });
});

