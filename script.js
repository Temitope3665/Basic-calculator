// const num2 = document.querySelector('.display-num2')
const operand = document.querySelector('.display-operand')
const inputNum = document.querySelector('.display-num')
const inputNum2 = document.querySelector('.display-num2')
const displayResult = document.querySelector('.result')
const operators = document.querySelectorAll('.operator')
const numsBtn = document.querySelectorAll('.digit')
const clear = document.querySelector('#clear')
const values = document.querySelectorAll('button')


console.log(displayResult)



values.forEach(function(btn) {
    btn.addEventListener('click', calculate);
  });

  function calculate(event) {

    const btnValue = event.target.value;

    console.log(btnValue)

    if (btnValue === '=') {
        // check if displayResult is not empty then only proceed to calculation
        if (displayResult.value !== '') {
          // calculate and show the answer to displayField
          displayResult.value = Function('return ' + displayResult.value)();
          console.log(displayResult.value)
        }
    } else if (btnValue === 'c') {
        // clear everything on displayResult
        displayResult.value = '';

    } else if (btnValue === 'del') {
      let resultVal = displayResult.value
      resultVal = resultVal.substr(0, resultVal.length - 1)
    }
    else {
        // otherwise concatenate it to the answerField
        displayResult.value += btnValue;
  }

}
