const btns = document.querySelectorAll('.btn');
const memoryBtns = document.querySelectorAll('.memory-btn');
const calcValue = document.querySelector('.first-display');
const historyValue = document.querySelector('.second-display');

let prevEntry = 0;

let currentEntry = 0;
let prevNumber = 0;

let operator = null;
let result = 0;

calcValue.innerText = currentEntry;


const calc = (el) => {
  let dataKey = el.target.dataset.key;
  let dataType = el.target.dataset.type;
  let displayedNumber = calcValue.textContent;
  
  // Calculate the result
  const calculate = (a, operator, b) => {
    let result = '';
    a = parseFloat(a);
    b = parseFloat(b);
  
    if(operator === '+') {
      result = a + b;
    } else if(operator === '-') {
      result = a - b;
    } else if(operator === '*') {
      result = a * b;
    } else if(operator === '/') {
      result = a / b;
    }
    return result;
  }

  // Define functionality for each button
  if(dataType === 'operator') {

    if(dataKey === '.') {
      calcValue.textContent = displayedNumber + dataKey;
      historyValue.textContent += dataKey;

    } else if(dataKey === 'clear') {
      prevNumber = 0;
      prevEntry = 0;
      currentEntry = 0;
      operator = null;
      calcValue.textContent = '0';
      historyValue.textContent = '';

    } else if(dataKey === '=') {
      result = calculate(prevEntry, operator, currentEntry);
      calcValue.textContent = result;
      operator = '=';
      historyValue.textContent += operator;

    } else if(dataKey === '*' || dataKey === '/' || dataKey === '+' || dataKey === '-') {
      calcValue.textContent = '';
      operator = dataKey;
      historyValue.textContent = prevNumber + operator;

    } else if(dataKey === '+/-') {
      console.log('plus/minus');

    } else if(dataKey === '%') {
      const precantage = ((prevEntry * currentEntry) / 100);
      calcValue.textContent = precantage;
      return currentEntry = precantage;

    } else if(dataKey === 'clear-entry') {
      currentEntry = '';
      calcValue.textContent = currentEntry;
      if(calcValue.textContent = result) {
        prevNumber = 0;
        prevEntry = 0;
        currentEntry = 0;
        operator = null;
        calcValue.textContent = '0';
        historyValue.textContent = '';
      }
      
    } else if(dataKey === 'backspace') {
      // backspace();
    } else if(dataKey === 'fraction') {
      console.log('fraction');
    } else if(dataKey === '^2') {
      console.log('^2');
    } else if(dataKey === 'sqr') {
      console.log('sqr');
    }
  } 
  data();

  // Define data key
  function data() {
    if(dataType === 'number') {
      if(displayedNumber === '0') {
        prevNumber = dataKey;
        prevEntry = dataKey;
        currentEntry = dataKey;
        calcValue.textContent = currentEntry;
      } 
      else if(displayedNumber !== '0' && (operator === '-' || operator === '+' || operator === '*' || operator === '/')) {
        console.log('dziala');
        if(calcValue.textContent !== '0') {
          calcValue.textContent += dataKey;
          historyValue.textContent += dataKey;
          currentEntry = calcValue.textContent;
          prevNumber = dataKey;
        } else {
          consolelog('nie jest');
          currentEntry = dataKey;
        }
      } else {
        prevNumber += dataKey;
        currentEntry += dataKey;
        prevEntry += dataKey;
        calcValue.textContent += dataKey;
      }
    }
  }
//   function backspace() {
//     if(calcValue.textContent !== '0') {
//       currentEntry = currentEntry.slice(0, -1);
//       prevEntry = prevEntry.slice(0, -1);
//       prevNumber = prevNumber.slice(0, -1);
//       calcValue.textContent = calcValue.textContent.slice(0, -1);
//       historyValue.textContent = prevEntry;
//     }
// };

}
function memoryButtons() {

}

btns.forEach(btn => btn.addEventListener('click', calc));
memoryBtns.forEach(btn => btn.addEventListener('click', memoryButtons));