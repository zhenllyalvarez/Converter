let display = document.getElementById('display');
let modeMessage = document.getElementById('modeMessage');
let binaryToDecimal = document.getElementById('binaryToDecimal');
let binaryToOctal = document.getElementById('binaryToOctal');
let BinaryToHexadecimal = document.getElementById('BinaryToHexadecimal');
let decimalToBinary = document.getElementById('decimalToBinary');
let decimalToOctal = document.getElementById('decimalToOctal');
let numberButtons = document.querySelectorAll('.btn-light');
let selectedMode = '';

// binary to decimal
binaryToDecimal.addEventListener('click', function () {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = true;
    }

    modeMessage.innerHTML = 'Enter Binary number to convert into decimal';
});

// binary to Octal
binaryToOctal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = true;
    }

    modeMessage.innerHTML = 'Enter Binary number to convert into Octal';
});

// binary to Hexadecimal
BinaryToHexadecimal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = true;
    }

    modeMessage.innerHTML = 'Enter Binary number to convert into Hexadecimal';
});

// Decimal to binary
decimalToBinary.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Decimal number to convert into Binary';
});

// Decimal to octal
decimalToOctal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Decimal number to convert into Octal';
});

// Decimal to Hexadecimal
decimalToHexadecimal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Decimal number to convert into Hexadecimal';
});

// Octal to binary
OctalToBinary.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Octal number to convert into Binary';
});

// Octal to decimal
OctalToDecimal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Octal number to convert into Decimal';
});

// Octal to hexadecimal
OctalToHexadecimal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Octal number to convert into Hexadecimal';
});

// Hexadecimal to binary
HexadecimalToBinary.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Hexadecimal number to convert into Binary';
});

// Hexadecimal to decimal
HexadecimalToDecimal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Hexadecimal number to convert into Decimal';
});

// Hexadecimal to octal
HexadecimalToOctal.addEventListener('click', function() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('btn' + i).disabled = false;
    }

    modeMessage.innerHTML = 'Enter Hexadecimal number to convert into Octal';
});

// selection of the converter you want
const selectMode = (mode) => {
    selectedMode = mode;
    modeMessage.innerHTML = `Enter ${mode} number`;
};

const convert = () => {
    try {
        if (selectedMode.includes('Binary to Decimal')) {
            displayConversion.innerHTML = convertBinaryToDecimal(display.innerHTML);
        } else if (selectedMode.includes('Binary to Octal')) {
            displayConversion.innerHTML = convertBinaryToOctal(display.innerHTML);
        } else if (selectedMode.includes('Binary to Hexadecimal')) {
            displayConversion.innerHTML = convertBinaryToHexadecimal(display.innerHTML);
        } else if (selectedMode.includes('Decimal to Binary')) {
            displayConversion.innerHTML = convertDecimalToBinary(display.innerHTML);
        } else if (selectedMode.includes('Decimal to Octal')) {
            displayConversion.innerHTML = convertDecimalToOctal(display.innerHTML);
        } else if (selectedMode.includes('Decimal to Hexadecimal')) {
            displayConversion.innerHTML = convertDecimalToHexadecimal(display.innerHTML);
        } else if (selectedMode.includes('Octal to Binary')) {
            displayConversion.innerHTML = convertOctalToBinary(display.innerHTML);
        } else if (selectedMode.includes('Octal to Decimal')) {
            displayConversion.innerHTML = convertOctalToDecimal(display.innerHTML);
        } else if (selectedMode.includes('Octal to Hexadecimal')) {
            displayConversion.innerHTML = convertOctalToHexadecimal(display.innerHTML);
        } else if (selectedMode.includes('Hexadecimal to Binary')) {
            displayConversion.innerHTML = convertHexadecimalToBinary(display.innerHTML);
        } else if (selectedMode.includes('Hexadecimal to Decimal')) {
            displayConversion.innerHTML = convertHexadecimalToDecimal(display.innerHTML);
        } else if (selectedMode.includes('Hexadecimal to Octal')) {
            displayConversion.innerHTML = convertHexadecimalToOctal(display.innerHTML);
        }
         else {
            displayConversion.innerHTML = eval(display.innerHTML);
        }
    } catch (error) {
        displayConversion.innerHTML = 'Error';
    }
};

const convertBinaryToDecimal = (binaryNumber) => {
    return parseInt(binaryNumber, 2);
};

const convertBinaryToOctal = (binaryNumber) => {
    const decimalNumber = convertBinaryToDecimal(binaryNumber);
    return decimalNumber.toString(8);
};

const convertBinaryToHexadecimal = (binaryNumber) => {
    const decimalNumber = convertBinaryToDecimal(binaryNumber);
    return decimalNumber.toString(16).toUpperCase();
};

const convertDecimalToBinary = (decimalNumber) => {
    return Number(decimalNumber).toString(2);
};

const convertDecimalToOctal = (decimalNumber) => {
    return Number(decimalNumber).toString(8);
};

const convertDecimalToHexadecimal = (decimalNumber) => {
    return Number(decimalNumber).toString(16).toUpperCase();
};

const convertOctalToBinary = (octalNumber) => {
    const decimalNumber = parseInt(octalNumber, 8);
    return decimalNumber.toString(2);
};

const convertOctalToDecimal = (octalNumber) => {
    return parseInt(octalNumber, 8);
};

const convertOctalToHexadecimal = (octalNumber) => {
    const decimalNumber = parseInt(octalNumber, 8);
    return decimalNumber.toString(16).toUpperCase();
};

const convertHexadecimalToBinary = (hexadecimalNumber) => {
    return parseInt(hexadecimalNumber, 16).toString(2);
};

const convertHexadecimalToDecimal = (hexadecimalNumber) => {
    return parseInt(hexadecimalNumber, 16);
};

const convertHexadecimalToOctal = (hexadecimalNumber) => {
    const decimalNumber = parseInt(hexadecimalNumber, 16);
    return decimalNumber.toString(8);
};

function appendToDisplay(value) {
    display.innerHTML += value;
}

function clearDisplay() {
    display.innerHTML = '';
    location.reload();
}

function calculate() {
    try {
        displayConversion.innerHTML = eval(display.innerHTML);
    } catch (error) {
        displayConversion.innerHTML = 'Error';
    }
}