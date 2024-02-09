const submitBtn = document.getElementById("submit");

const minNum = 1;
const maxNum = 100;
const generatedNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

submitBtn.onclick = function() {

    const userInput = parseInt(document.getElementById("input").value);
    
    if(isNaN(userInput)) {
        window.alert("Please enter a valid Number!");
    } else if (userInput < minNum || userInput > maxNum) {
        window.alert(`Please enter a Number between "${minNum}" and "${maxNum}"!`);
    } 
    else {

        attempts++;
        if (userInput > generatedNum) {
            window.alert("Please enter a LOWER number!");
        } else if (userInput < generatedNum) {
            window.alert("Please enter a HIGHER number!");
        } else {
            window.alert( `CORRECT! The Number was ${generatedNum}. It took you ${attempts} Attempts!`);
        }

    }

}