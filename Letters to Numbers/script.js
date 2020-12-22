/*  SET THE HEIGHT ON PAGE-LOAD  */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);
/* window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize(); */



/*  CREATE AN ARRAY THAT CONTAINS ALL LETTERS AND THEIR CORRESPONDING NUMBER    */

function alphabetifier(letter) {
    return letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 96 : 64);
}



/*  NEXT STEP  */



/*  GETS LETTERS AND PRINTS ONTO RESULTS SECTION  */

/*function printLetters() {
    var userInputLetters = document.getElementById("input_text");
    var printInputLetters = document.getElementById("inputLetters");
    var allLetters = userInputLetters.value.toLowerCase();
    printInputLetters.value = allLetters;
}          VVVVV   OR   VVVVV           */
function printLetters() {
    document.getElementById("inputLetters").value = document.getElementById("input_text").value.toLowerCase()
}



/*  CONVERTS LOWERCASE LETTERS TO NUMBERS AND RETURNS THE TOTAL AMOUNT */

function totalNumbers() {
    /*  ALPHABET GLOBAL VARIABLE  */
var alphabet = {
    a: 1, b: 2,
    c: 3, d: 4,
    e: 5, f: 6,
    g: 7, h: 8,
    i: 9, j: 10,
    k: 11, l: 12,
    m: 13, n: 14,
    o: 15, p: 16,
    q: 17, r: 18,
    s: 19, t: 20,
    u: 21, v: 22,
    w: 23, x: 24,
    y: 25, z: 26,
    A: 1, B: 2,
    C: 3, D: 4,
    E: 5, F: 6,
    G: 7, H: 8,
    I: 9, J: 10,
    K: 11, L: 12,
    M: 13, N: 14,
    O: 15, P: 16,
    Q: 17, R: 18,
    S: 19, T: 20,
    U: 21, V: 22,
    W: 23, X: 24,
    Y: 25, Z: 26,
    ' ': 0
}
    var str = document.getElementById("input_text").value;
    var total = 0;
    for (var i = 0; i < str.length; i++)
    total += alphabet[str[i]];
    document.getElementById("convertedNumbers").value = total;
}

/*  RETURN INDIVIDUAL NUMBERS  */
function individualNumbers() {
    var alphabet = {
    a: 1, b: 2,
    c: 3, d: 4,
    e: 5, f: 6,
    g: 7, h: 8,
    i: 9, j: 10,
    k: 11, l: 12,
    m: 13, n: 14,
    o: 15, p: 16,
    q: 17, r: 18,
    s: 19, t: 20,
    u: 21, v: 22,
    w: 23, x: 24,
    y: 25, z: 26,
    A: 1, B: 2,
    C: 3, D: 4,
    E: 5, F: 6,
    G: 7, H: 8,
    I: 9, J: 10,
    K: 11, L: 12,
    M: 13, N: 14,
    O: 15, P: 16,
    Q: 17, R: 18,
    S: 19, T: 20,
    U: 21, V: 22,
    W: 23, X: 24,
    Y: 25, Z: 26,
    ' ': 0
    }
    var letters = document.getElementById("input_text").value;
    var convertedString = [];
    for (var i = 0; i < letters.length; i++) {
        convertedString += alphabet[letters[i]] + ' ';
        document.getElementById("individual_numbers").value = convertedString;
    }
    
}




/*  CHANGES SUBMIT BUTTON BACKGROUND-COLOR & COLOR  */
/*function changeSubmitButtonColor(_this) {
    _this.style.backgroundColor = "rgb(81, 166, 172)";
    _this.style.color = "rgb(212, 253, 212)";
}*/

/*  USE "RETURN" KEY ON KEYBOARD TO SUBMIT TEST AS WELL  */
document.getElementById("input_text")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit_button").click();
    }
})




/*  RESETS MAIN INPUT FIELD AFTER HITTING "RESTART" BUTTON  */
function resetInputField() {
    document.getElementById("input_text").value = '';
}

/*  RESETS LETTERS/NUMBERS SECTION AFTER HITTING "RESTART" BUTTON  */
function resetResults() {
    document.getElementById("inputLetters").value = '';
    document.getElementById("individual_numbers").value = '';
    document.getElementById("convertedNumbers").value = '';
    
}

/*  CHANGES RESTART BUTTON BACKGROUND-COLOR & COLOR AFTER HITTING SUBMIT */
function fillRestartButtonColor() {
    document.getElementById("restart_button").style.backgroundColor = "rgb(241, 86, 86)";
    document.getElementById("restart_button").style.color = "rgb(255, 232, 232)";
}

/*  RESETS RESTART BUTTON BACKGROUND-COLOR & COLOR AFTER HITTING "RESTART" BUTTON */
function resetRestartButtonColor() {
    document.getElementById("restart_button").style.backgroundColor = "whitesmoke";
    document.getElementById("restart_button").style.color = "rgb(59, 25, 25)";
}

/*  CHANGES SUBMIT BUTTON BACKGROUND-COLOR & COLOR AFTER HITTING "RESTART" BUTTON  */
function changeButtonColorAfterRestart() {
    document.getElementById("submit_button").style.backgroundColor = "rgb(51, 177, 51)";
    document.getElementById("submit_button").style.color = "black";
}

/*  DESELECTS SUBMIT BUTTON BACKGROUND-COLOR & COLOR AFTER HITTING "RESTART" BUTTON */
function deselectSubmitButtonColor() {
    document.getElementById("submit_button").style.backgroundColor = "whitesmoke";
    document.getElementById("submit_button").style.color = "rgb(63, 100, 63)";
    document.getElementById("submit_button").style.border = "2px solid rgb(51, 177, 51)";
}

/*  SETS CURSOR IN INPUT FIELD AFTER HITTING RESET  */
function setFocus() {
    var input = document.getElementById("input_text");
    input.focus();
}




/*  ALPHABET VARIABLES WITH CORRESPONDING NUMBER

JUST IN CASE...
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;
var h = 8;
var i = 9;
var j = 10;
var k = 11;
var l = 12;
var m = 13;
var n = 14;
var o = 15;
var p = 16;
var q = 17;
var r = 18;
var s = 19;
var t = 20;
var u = 21;
var v = 22;
var w = 23;
var x = 24;
var y = 25;
var z = 26;
*/

