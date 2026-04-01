const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
const themeBtn = document.getElementById('theme-toggle');


themeBtn.addEventListener('click', () => {
    document.body.getAttribute('data-theme') === 'dark' 
        ? document.body.removeAttribute('data-theme') 
        : document.body.setAttribute('data-theme', 'dark');
});


function appendValue(input) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = '0';
    historyDisplay.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateRoot() {
    historyDisplay.innerText = `√(${display.innerText})`;
    display.innerText = Math.sqrt(eval(display.innerText)).toFixed(4);
}

function calculate() {
    try {
        let expression = display.innerText.replace('%', '/100');
        let result = eval(expression);
        historyDisplay.innerText = expression + " =";
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}

function createLeaf() {
    const container = document.getElementById('leaf-container');
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 5 + 5 + 's';
    leaf.style.width = leaf.style.height = Math.random() * 15 + 10 + 'px';
    container.appendChild(leaf);
    setTimeout(() => leaf.remove(), 10000);
}
setInterval(createLeaf, 900);
