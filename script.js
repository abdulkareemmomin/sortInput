function sortTheNumbers() {
    let input = document.getElementById("numbers").value.trim();

    if (input === "") {
        alert("you have to enter values");
        return;
    }

    let inputArray = input.split(" ");

    let originalInput = [...inputArray];
    let numberInput = []

    for (let number of inputArray) {
        numberInput.push(parseInt(number.trim()));
    }


    numberInput.sort((a, b) => a - b);


    let frequency = new Map();

    for (let number of originalInput) {
        if (!frequency.has(number)) {
            frequency.set(number, 1);
        }
        else {
            frequency.set(number, frequency.get(number) + 1);
        }
    }

    let freText = "";
    for (let [key, value] of frequency) {
        freText += `Number ${key} appears ${value} times <br>`;
    }

    for (const [key, value] of frequency) {
        console.log(key + "  : " + value)
    }

    let inp = document.getElementById("input");
    inp.innerHTML = originalInput;


    let sorted = document.getElementById("sorted");
    sorted.innerHTML = numberInput;


    let showFrequency = document.getElementById("frequency");
    showFrequency.innerHTML = freText;

    document.getElementById("result").style.display = 'block';

}

function copySorted() {
    const copiedText = document.getElementById("sorted").innerText;
    if (!copiedText.trim()) {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(copiedText)
        .then(() => {
            alert("Sorted numbers copied!");
        })
        .catch(() => {
            alert("Copy failed");
        });
}

function copyInput() {
    const copiedText = document.getElementById("input").innerText;
    if (!copiedText.trim()) {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(copiedText)
        .then(() => {
            alert("Input numbers copied!");
        })
        .catch(() => {
            alert("Copy failed");
        });
}


function copyFrequency() {
    const copiedText = document.getElementById("frequency").innerText;
    if (!copiedText.trim()) {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(copiedText)
        .then(() => {
            alert("Frequency of numbers copied!");
        })
        .catch(() => {
            alert("Copy failed");
        });
}