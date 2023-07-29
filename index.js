const button = document.querySelector('button');
button.addEventListener('click', event => {
    let input = Number(document.getElementById('input').value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let output = input;
    if (from == "Fahrenheit" && to == "Celsius") {
        output =  (input - 32) * (5 / 9);
        bgChange(output);
    } else if (from == "Fahrenheit" && to == "Kelvin") {
        output = (input - 32) * (5 / 9) + 273.15;
       bgChange(output-273);
    } else if (from == "Celsius" && to == "Fahrenheit") {
        output = input * (9 / 5) + 32;
        bgChange(input);
    } else if (from == "Celsius" && to == "Kelvin") {
        output = input + 273.15;
        bgChange(input);
    } else if (from == "Kelvin" && to == "Fahrenheit") {
        output = (input - 273.15) * (9 / 5) + 32;
        bgChange(input-273);
    } else if (from == "Kelvin" && to == "Celsius") {
        output = input - 273.15;
        bgChange(output);
    }
    document.getElementById("output").value = output.toFixed(2);
    document.querySelector(".output-box").classList.remove('invisible');
})

// function that changes the background image based on the temperature

function bgChange(cel){
    if (cel > 33) {
        document.querySelector("body").classList.add('hot');
    }
    else if (cel > 5) {
        document.querySelector("body").classList.add('cold');
    }
    else{
        document.querySelector("body").classList.add('ice');
    }
}