// class Calculator {
//     constructor(prevDigit, currentDigit, operand) {
//         this.prevDigit = prevDigit
//         this.currentDigit = currentDigit
//         this.operation = operand
//     }

//     calculate() {
//         // inputNum.innerText = this.prevDigit
//         // inputNum2.innerText = this.currentDigit
//         // operand.innerText = this.operation
//         // displayResult.innerText
//         this.inputNum
//     }

//     clear() {

//         this.prevDigit = ''
//         this.currentDigit = ''
//         this.operation = ''

//     }

//     delete() {

//     }

//     showResult() {
//         displayResult.innerText = this.prevDigit * this.currentDigit
//     }

//     showValue() {
//         inputNum.innerText = `${this.prevDigit} ${this.currentDigit}`
//         console.log(typeof this.prevDigit)
//     }
// }

// const calculator = new Calculator (10, 4) 
// console.log(calculator)
// calculator.showResult()
// calculator.showValue()




// for (let i = 0; i < numsBtn.length; i++) {
//     numsBtn[i].addEventListener('click', (e) => {
//         console.log(numsBtn[i].value)

//         inputNum.textContent += numsBtn[i].value
//     })
// }

// for (let op = 0; op < operators.length; op++) {
//     operators[op].addEventListener('click', (e) => {
//         console.log(operators[op].value)
//         inputNum.textContent += operators[op].value

     
         
//     })
// }

// numsBtn.forEach(digits => {
//     digits.addEventListener('click', calculator.showValue)
// })   

// clear.addEventListener('click', event => {
//     event.preventDefault
//     calculator.clear()
//     calculator.showResult()
//     calculator.showValue()
// })








values.forEach(function(button) {
    button.addEventListener('click', () => {
        let inputValues = button.value
        calculate(inputValues)
    });
});

function calculate(inputV) {
    let input = inputV
    let res = Function("return " + input)()
    console.log(res)
}




// for (let btn = 0; btn < values.length; btn++) {
//     values[btn].addEventListener('click', (e) => {
//         let inputValues = values[btn].value
    
//         // let input = String(inputValues)
//         // let res = Function("return " + input)()
//         // console.log(res)

//         // console.log(inputValues)
        
//         if (inputNum !== '') {

//             inputNum.textContent += values[btn].value

//             if (inputNum === '=') {

//                 //let resultValue = inputNum.value


//                 //resultValue = Function('return '+ inputNum.value)();

//             }

            
//         }

//         if (inputValues === 'c') {
//             inputNum.textContent = ''
//             displayResult.textContent = ''
//         }
//     })
// }



// function calculate() {

//     const clickBtn = event.target.value
    
//     if (clickBtn === '=') {
//         displayResult.value = Function('return '+ displayResult.value)();
        
//     }

// }


// values.forEach(function(button) {
//     button.addEventListener('click', calculate);
//   });

//   function calculate(event) {
//     // current clicked buttons value
//     const clickedButtonValue = event.target.value;
  
//     if (clickedButtonValue === '=') {
//       // check if the answerField is not empty then only do the calculation
//       if (displayResult.value !== '') {
//         // calculate and show the answer to answerField
//         displayResult.value = Function('return '+ inputNum.value)();
//       }
//     } else if (clickedButtonValue === 'c') {
//       // clear everything on answerField
//       displayResult.value = '';
//     } else {
//       // otherwise concatenate it to the answerField
//       displayResult.value += clickedButtonValue;
//     }
//   }
