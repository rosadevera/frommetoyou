// Function to dynamically change CSS properties
function changeCSSListener(id, target, styling, unit) {
    let input = document.getElementById(id);
    let output = document.querySelector(`output[for=${id}]`);
    let box = document.getElementById(target);

    input.addEventListener("input", function (event) {
        output.textContent = input.value + unit;
        box.style[styling] = `${input.value}${unit}`;
    });
}

// Function to dynamically change HTML content
function changeHTMLListener(id, target) {
    let input = document.getElementById(id);
    let box = document.getElementById(target);

    input.addEventListener("input", function (event) {
        box.textContent = input.value;
        box2.textContent = input.value;
    });
}

// Function to update text content and size
function updateTextContent() {
    let customTextInput = document.getElementById("customText");
    let box = document.getElementById("box");
    let textColorInput = document.getElementById("textColor");
    let textFontSelect = document.getElementById("textFont");
    let textSizeInput = document.getElementById("textSize");

    // Replace newline characters with <br> tags
    let newText = customTextInput.value.replace(/\n/g, '<br>');
    box.innerHTML = newText;

    // Apply selected text color
    box.style.color = textColorInput.value;

    // Apply selected text font
    box.style.fontFamily = textFontSelect.value;

    // Apply selected text size
    box.style.fontSize = textSizeInput.value + "px";
}

// Add event listeners to inputs for updating text content
document.getElementById("customText").addEventListener("input", updateTextContent);
document.getElementById("textColor").addEventListener("input", updateTextContent);
document.getElementById("textFont").addEventListener("change", updateTextContent);
document.getElementById("textSize").addEventListener("input", updateTextContent);

// Add event listener to expand panel
let expandBtn = document.getElementById("expand");
let sidebar = document.getElementById("sidebar");

expandBtn.addEventListener("click", function (event) {
    expandBtn.classList.toggle("opened");
    sidebar.classList.toggle("expanded");
});

// Function to update text content for the second editable text
function updateTextContent2() {
    let customTextInput2 = document.getElementById("customText2");
    let box2 = document.getElementById("box2");
    let textColorInput = document.getElementById("textColor");
    let textFontSelect = document.getElementById("textFont");
    let textSizeInput = document.getElementById("textSize");

    // Replace newline characters with <br> tags
    let newText = customTextInput2.value.replace(/\n/g, '<br>');
    box2.innerHTML = newText;

    // Apply selected text color
    box2.style.color = textColorInput.value;

    // Apply selected text font
    box2.style.fontFamily = textFontSelect.value;
}

// Add event listeners to inputs for updating text content for the second editable text
document.getElementById("customText2").addEventListener("input", updateTextContent2);
document.getElementById("textColor").addEventListener("input", updateTextContent2);
document.getElementById("textFont").addEventListener("change", updateTextContent2);
document.getElementById("textSize").addEventListener("input", updateTextContent2);
