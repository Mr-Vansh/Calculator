// CALCULATE 

function calculate(data) {
    let output = document.getElementById('output');
    let input = document.getElementById('input');
    let result = 0;

    switch (data) {

        case 'C':
            //  extracting sub-string from the provided input from 0 to (lenght(string) - 1)
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
            output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML);
            break;

        case 'AC':
            input.innerHTML = "";
            output.innerHTML = "0";
            break;

        case '=':
            input.innerHTML = input.innerHTML;
            output.innerHTML = eval(input.innerHTML);
            break;


        default:
            input.innerHTML += data;
    }

}



// DARK MODE
function darkMode() {

    let wrapper = document.getElementById('wrapper');
    let darkBar = document.getElementById('darkBar');
    let checkBox = document.getElementById('checkBox');
    let text = document.getElementById('text');
    let result = document.getElementById('result');
    let button = document.getElementById('button')

    if (checkBox.checked == true) {
        wrapper.style.backgroundColor = "#333";
        darkBar.style.backgroundColor = "black";
        result.style.backgroundColor = "#fff";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        text.innerText = "Enable Light Mode";
        text.style.color = "white";
    }
    else {
        wrapper.style.backgroundColor = "#009688";
        darkBar.style.backgroundColor = "white";
        result.style.backgroundColor = "rgb(236, 200, 206)";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        text.innerText = "Enable Dark Mode";
        text.style.color = "black";
    }

}