function AddTwo(){
    const twoButton = document.getElementById("twobutton");
    const twoCancelButton = document.getElementById("twocancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twoform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    
}

function CancelTwo(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twoform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton2";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwo .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwo(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output5');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output6');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output7');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output8');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwo(){
    const inputBoxes = document.querySelectorAll("#twoform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twoform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twocancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwo;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddThree(){
    const twoButton = document.getElementById("threebutton");
    const twoCancelButton = document.getElementById("threecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("threeform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelThree(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("threeform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton3";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaythree .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputThree(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output9');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output10');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output11');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output12');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputThree(){
    const inputBoxes = document.querySelectorAll("#threeform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("threeform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "threecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelThree;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddFour(){
    const twoButton = document.getElementById("fourbutton");
    const twoCancelButton = document.getElementById("fourcancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("fourform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelFour(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("fourform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton4";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayfour .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputFour(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output13');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output14');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output15');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output16');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputFour(){
    const inputBoxes = document.querySelectorAll("#fourform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("fourform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "fourcancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelFour;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddFive(){
    const twoButton = document.getElementById("fivebutton");
    const twoCancelButton = document.getElementById("fivecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("fiveform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelFive(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("fiveform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton5";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayfive .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputFive(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output17');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output18');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output19');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output20');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputFive(){
    const inputBoxes = document.querySelectorAll("#fiveform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("fiveform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "fivecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelFive;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddSix(){
    const twoButton = document.getElementById("sixbutton");
    const twoCancelButton = document.getElementById("sixcancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("sixform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelSix(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("sixform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton6";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaysix .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputSix(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output21');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output22');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output23');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output24');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputSix(){
    const inputBoxes = document.querySelectorAll("#sixform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("sixform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "sixcancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelSix;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddNine(){
    const twoButton = document.getElementById("ninebutton");
    const twoCancelButton = document.getElementById("ninecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("nineform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelNine(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("nineform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton9";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaynine .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputNine(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output25');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output26');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output27');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output28');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputNine(){
    const inputBoxes = document.querySelectorAll("#nineform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("nineform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "ninecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelNine;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTen(){
    const twoButton = document.getElementById("tenbutton");
    const twoCancelButton = document.getElementById("tencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("tenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("tenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton10";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayten .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output29');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output30');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output31');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output32');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTen(){
    const inputBoxes = document.querySelectorAll("#tenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("tenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "tencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddEleven(){
    const twoButton = document.getElementById("elevenbutton");
    const twoCancelButton = document.getElementById("elevencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("elevenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelEleven(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("elevenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton11";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayeleven .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputEleven(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output33');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output34');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output35');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output36');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputEleven(){
    const inputBoxes = document.querySelectorAll("#elevenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("elevenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "elevencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelEleven;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwelve(){
    const twoButton = document.getElementById("twelvebutton");
    const twoCancelButton = document.getElementById("twelvecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twelveform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwelve(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twelveform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton12";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwelve .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwelve(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output37');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output38');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output39');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output40');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwelve(){
    const inputBoxes = document.querySelectorAll("#twelveform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twelveform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twelvecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwelve;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddThirteen(){
    const twoButton = document.getElementById("thirteenbutton");
    const twoCancelButton = document.getElementById("thirteencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("thirteenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelThirteen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("thirteenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton13";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaythirteen .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputThirteen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output41');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output42');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output43');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output44');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputThirteen(){
    const inputBoxes = document.querySelectorAll("#thirteenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("thirteenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "thirteencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelThirteen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddSixteen(){
    const twoButton = document.getElementById("sixteenbutton");
    const twoCancelButton = document.getElementById("sixteencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("sixteenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelSixteen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("sixteenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton16";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaysixteen .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputSixteen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output45');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output46');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output47');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output48');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputSixteen(){
    const inputBoxes = document.querySelectorAll("#sixteenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("sixteenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "sixteencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelSixteen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddSeventeen(){
    const twoButton = document.getElementById("seventeenbutton");
    const twoCancelButton = document.getElementById("seventeencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("seventeenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelSeventeen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("seventeenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton17";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayseventeen .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputSeventeen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output49');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output50');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output51');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output52');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputSeventeen(){
    const inputBoxes = document.querySelectorAll("#seventeenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("seventeenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "seventeencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelSeventeen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddEighteen(){
    const twoButton = document.getElementById("eighteenbutton");
    const twoCancelButton = document.getElementById("eighteencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("eighteenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelEighteen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("eighteenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton18";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordayeighteen .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputEighteen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output53');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output54');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output55');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output56');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputEighteen(){
    const inputBoxes = document.querySelectorAll("#eighteenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("eighteenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "eighteencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelEighteen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddNineteen(){
    const twoButton = document.getElementById("nineteenbutton");
    const twoCancelButton = document.getElementById("nineteencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("nineteenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelNineteen(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("nineteenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton19";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaynineteen .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputNineteen(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output57');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output58');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output59');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output60');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputNineteen(){
    const inputBoxes = document.querySelectorAll("#nineteenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("nineteenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "nineteencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelNineteen;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwenty(){
    const twoButton = document.getElementById("twentybutton");
    const twoCancelButton = document.getElementById("twentycancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentyform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwenty(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentyform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton20";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwenty .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwenty(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output61');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output62');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output63');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output64');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwenty(){
    const inputBoxes = document.querySelectorAll("#twentyform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentyform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentycancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwenty;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwentyThree(){
    const twoButton = document.getElementById("twentythreebutton");
    const twoCancelButton = document.getElementById("twentythreecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentythreeform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwentyThree(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentythreeform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton23";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwentythree .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwentyThree(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output65');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output66');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output67');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output68');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwentyThree(){
    const inputBoxes = document.querySelectorAll("#twentythreeform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentythreeform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentythreecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwentyThree;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwentyFour(){
    const twoButton = document.getElementById("twentyfourbutton");
    const twoCancelButton = document.getElementById("twentyfourcancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentyfourform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwentyFour(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentyfourform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton24";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwentyfour .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwentyFour(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output69');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output70');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output71');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output72');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwentyFour(){
    const inputBoxes = document.querySelectorAll("#twentyfourform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentyfourform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentyfourcancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwentyFour;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwentyFive(){
    const twoButton = document.getElementById("twentyfivebutton");
    const twoCancelButton = document.getElementById("twentyfivecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentyfiveform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwentyFive(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentyfiveform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton25";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwentyfive .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwentyFive(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output73');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output74');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output75');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output76');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwentyFive(){
    const inputBoxes = document.querySelectorAll("#twentyfiveform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentyfiveform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentyfivecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwentyFive;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwentySix(){
    const twoButton = document.getElementById("twentysixbutton");
    const twoCancelButton = document.getElementById("twentysixcancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentysixform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwentySix(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentysixform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton26";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwentysix .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwentySix(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output77');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output78');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output79');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output80');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwentySix(){
    const inputBoxes = document.querySelectorAll("#twentysixform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentysixform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentysixcancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwentySix;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddTwentySeven(){
    const twoButton = document.getElementById("twentysevenbutton");
    const twoCancelButton = document.getElementById("twentysevencancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("twentysevenform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelTwentySeven(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("twentysevenform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton27";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaytwentyseven .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputTwentySeven(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output81');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output82');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output83');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output84');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputTwentySeven(){
    const inputBoxes = document.querySelectorAll("#twentysevenform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("twentysevenform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "twentysevencancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelTwentySeven;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddThirty(){
    const twoButton = document.getElementById("thirtybutton");
    const twoCancelButton = document.getElementById("thirtycancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("thirtyform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelThirty(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("thirtyform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton30";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaythirty .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputThirty(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output85');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output86');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output87');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output88');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputThirty(){
    const inputBoxes = document.querySelectorAll("#thirtyform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("thirtyform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "thirtycancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelThirty;  
    oneform.appendChild(submitcancellation);
}

//////////////////////////////////////////////////////////////////////////////////////////

function AddThirtyOne(){
    const twoButton = document.getElementById("thirtyonebutton");
    const twoCancelButton = document.getElementById("thirtyonecancelbutton");
    twoButton.remove();
    twoCancelButton.remove();

    const section = document.getElementById("thirtyoneform");

    let firstDiv = document.createElement("div");
    let firstLabel = document.createElement("label");
    firstLabel.appendChild(document.createTextNode("11am:"));
    firstLabel.setAttribute('for', 'eleven-label');

    let firstInput = document.createElement("input");
    firstInput.setAttribute('id', 'eleven1-input');
    firstInput.setAttribute('size', '5');

    firstDiv.appendChild(firstLabel);
    firstDiv.appendChild(firstInput);
    
    section.appendChild(firstDiv);

   
    let secondDiv = document.createElement("div");
    let secondLabel = document.createElement("label");
    secondLabel.appendChild(document.createTextNode("1pm:"));
    secondLabel.setAttribute('for', 'one-label');

    let secondInput = document.createElement("input");
    secondInput.setAttribute('id', 'one1-input');
    secondInput.setAttribute('size', '5');

    secondDiv.appendChild(secondLabel);
    secondDiv.appendChild(secondInput);

    section.appendChild(secondDiv);

    let thirdDiv = document.createElement("div");
    let thirdLabel = document.createElement("label");
    thirdLabel.appendChild(document.createTextNode("3pm:"));
    thirdLabel.setAttribute('for', 'three-label');

    let thirdInput = document.createElement("input");
    thirdInput.setAttribute('id', 'three3-input');
    thirdInput.setAttribute('size', '5');

    thirdDiv.appendChild(thirdLabel);
    thirdDiv.appendChild(thirdInput);

    section.appendChild(thirdDiv);

    let fourthDiv = document.createElement("div");
    let fourthLabel = document.createElement("label");
    fourthLabel.appendChild(document.createTextNode("5pm:"));
    fourthLabel.setAttribute('for', 'five-label');

    let fourthInput = document.createElement("input");
    fourthInput.setAttribute('id', 'five5-input');
    fourthInput.setAttribute('size', '5');

    fourthDiv.appendChild(fourthLabel);
    fourthDiv.appendChild(fourthInput);

    section.appendChild(fourthDiv);

    output();
    

}

function CancelThirtyOne(){
 
        let inputDiv = document.createElement("div");
        let inputLabel = document.createElement("label");
        inputLabel.appendChild(document.createTextNode("Enter name to cancel: "));
        inputLabel.setAttribute('for', 'cancel-input');
    
        let inputBox = document.createElement("input");
        inputBox.setAttribute('id', 'cancel-input');
        inputBox.setAttribute('size', '20');
    
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
        const section = document.getElementById("thirtyoneform");
        section.appendChild(inputDiv);

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.id = "submitbutton31";
        submitButton.classList.add("submit-button");
        submitButton.onclick = function(){
          
        const userInput = document.getElementById('cancel-input').value;
            
        const outputElements = document.querySelectorAll("#outputfordaythirtyone .output");
           
        outputElements.forEach(outputElement => {
            if (outputElement.innerHTML === userInput) {
                outputElement.remove();
                }
            });
        };
        section.appendChild(submitButton);
}

function outputThirtyOne(){

    const txt1 = document.getElementById('eleven1-input');
    const out1 = document.getElementById('output89');
        out1.innerHTML = txt1.value;
        out1.classList.add("output");

    const txt2 = document.getElementById('one1-input');
    const out2 = document.getElementById('output90');
        out2.innerHTML = txt2.value;
        out2.classList.add("output");

    const txt3 = document.getElementById('three3-input');
    const out3 = document.getElementById('output91');
        out3.innerHTML = txt3.value;
        out3.classList.add("output");

    const txt4 = document.getElementById('five5-input');
    const out4 = document.getElementById('output92');
            out4.innerHTML = txt4.value; 
            out4.classList.add("output"); 
}

function removeInputThirtyOne(){
    const inputBoxes = document.querySelectorAll("#thirtyoneform input");
    inputBoxes.forEach(inputBox => inputBox.remove());

    var oneform = document.getElementById("thirtyoneform");
    var submitcancellation = document.createElement("button");
    submitcancellation.innerHTML = "Cancel Appointment";
    submitcancellation.id = "thirtyonecancelbutton";
    submitcancellation.classList.add("cancel-button"); 
    submitcancellation.onclick = CancelThirtyOne;  
    oneform.appendChild(submitcancellation);
}

