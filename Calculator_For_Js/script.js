const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        const arr = ['.'];
        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id == 'zero'){
            display.innerText += '0';
        } else if (item.id == 'set'){
            display.innerText = "Ahhh! I'm forget it!";
            setTimeout(() => (display.innerText = ''), 2000);
        } else if (display.innerText == '201802+0' && item.id == 'equal'){
            display.innerText = "I'm sad 'cause I can't see the classmate 😭";
            setTimeout(() => (display.innerText = ""), 2000);
        } else if (display.innerText != '' && item.id =='equal'){
            display.innerText = eval(parseFloat(eval(display.innerText).toFixed(12)));
        } else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'What the hell! What are you doing about!!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}