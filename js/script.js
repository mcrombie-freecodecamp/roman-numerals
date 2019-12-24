function convertToRoman(num) {

    let str = "";
    //I represents 1
    //1 - 3
    if (num < 4) {
        for (let i = 0; i < num; i++) {
            str += "I";
        }
    }

    //V represents 5
    //4 - 8
    else if (num >= 4 && num <= 8) {
        if (num < 5) {
            str = "I" + "V";
        }
        else if (num == 5) {
            str = "V";
        }
        else if (num > 5) {
            str = "V"
            for (let i = 0; i < num - 5; i++) {
                str += "I";
            }
        }
    }

    //X represents 10
    //9- 39
    else if (num >= 9 && num <= 39) {
        if (num < 10) {
            str = "I" + "X";
        }
        else if (num == 10) {
            str = "X";
        }
        else if (num > 10) {
            str = "X"
            str += convertToRoman(num - 10);
        }
    }

    //L represents 50
    //40 - 89
    else if (num >= 40 && num <= 89) {
        if (num < 50) {
            str = "XL" + convertToRoman(num - 40);
        }
        else if (num == 50) {
            str = "L";
        }
        else if (num > 10) {
            str = "L"
            str += convertToRoman(num - 50);
        }
    }

    //C represents 100
    //90 - 399
    else if (num >= 90 && num <= 399) {
        if (num < 100) {
            str = "XC" + convertToRoman(num - 90);
        }
        else if (num == 100) {
            str = "C";
        }
        else if (num > 10) {
            str = "C"
            str += convertToRoman(num - 100);
        }
    }

    //D represents 500
    //400 - 899
    else if (num >= 400 && num <= 899) {
        if (num < 500) {
            str = "CD" + convertToRoman(num - 400);
        }
        else if (num == 500) {
            str = "D";
        }
        else if (num > 500) {
            str = "D"
            str += convertToRoman(num - 500);
        }
    }

    //M represents 1000
    //900 - 
    else if (num >= 900) {
        if (num < 1000) {
            str = "CM" + convertToRoman(num - 900);
        }
        else if (num == 1000) {
            str = "M";
        }
        else if (num > 1000) {
            str = "M"
            str += convertToRoman(num - 1000);
        }
    }



    return str;
}

document.getElementById("submit-button").addEventListener("click", function () {
    let input_number = document.getElementById("number-input").value;
    let converted_roman_numeral = convertToRoman(input_number);
    document.getElementById("roman-numeral-display").innerHTML = converted_roman_numeral;
})

document.getElementById("number-input").addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit-button").click();
    }
})

