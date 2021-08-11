const nameInput = document.getElementById("nameInput");
const name = document.getElementById("name");
const myButton = document.getElementById("myButton");
const genderButton = document.getElementById("genderButton");
const genderInput = document.getElementById("genderInput");
const gender = document.getElementById("gender");
const colorButton = document.getElementById("colorButton");
const stickerMain = document.getElementById("sticker-main");


myButton.addEventListener('click', () => {
    name.innerText = nameInput.value;
});

genderButton.addEventListener('click', () => {
    gender.innerText = genderInput.value;
    gender.style.position = "relative";
    gender.style.top = "3px";
});


const colorArray = ["red", "blue", "purple", "green", "yellow"]

colorButton.addEventListener('click', () =>{
    const ranNum = Math.floor(Math.random() * 5);
    stickerMain.style.backgroundColor = (colorArray[ranNum]);
});









