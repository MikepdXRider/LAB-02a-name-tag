const nameInput = document.getElementById("nameInput");
const name = document.getElementById("name");
const myButton = document.getElementById("myButton");
const genderButton = document.getElementById("genderButton");
const genderInput = document.getElementById("genderInput");
const gender = document.getElementById("gender");
const colorButton = document.getElementById("colorButton");
const stickerMain = document.getElementById("sticker-main");
const fontButton = document.getElementById("fontButton");
const body = document.getElementById("body");


// Change name
myButton.addEventListener('click', () => {
    name.innerText = nameInput.value;
});

// Change pronouns
genderButton.addEventListener('click', () => {
    gender.innerText = genderInput.value;
    gender.style.position = "relative";
    gender.style.top = "3px";
});

//Change colors
const colorArray = ["red", "blue", "purple", "green", "yellow"];

colorButton.addEventListener('click', () =>{
    const ranNum = Math.floor(Math.random() * 5);
    stickerMain.style.backgroundColor = (colorArray[ranNum]);
});

// Change font
let counter = 0;

fontButton.addEventListener('click', () =>{
    counter++
    if (counter % 2 == 0){
        body.style.fontFamily = 'serif'; 
    } else if ( counter % 2 !== 0){
        body.style.fontFamily = 'sans-serif';
    }
});












