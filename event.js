const Yesbtn= document.getElementById("btnYes");
const Nobtn= document.getElementById("btnNo");

const text= document.getElementById("text");
const Catpic= document.getElementById("imageCat");

const images=[
    "image/cat2.gif",
    "image/cat3.jpg",
    "image/cat4.webp",
    "image/cat5.jpg",
    "image/cat6.jpg",
    "image/cat10.webp",
]

let index=0;

Nobtn.addEventListener("click", function() {
    Catpic.src = images[index];
    index++;
    if(index >= images.length){
        index=0;
    }
});

// Nobtn.addEventListener("mouseleave", function() {
//     Catpic.src = "image/cat1.jpg";
// });

Nobtn.addEventListener("click", function(){
    const maxX = 500;
    const maxY = 300;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    Nobtn.style.position="absolute";
    Nobtn.style.left = x + "px";
    Nobtn.style.top = y + "px";

});

const images_happycat=[
    "image/cat8.webp",
    "image/cat7.gif",
    "image/cat9.jpg",
]
let Sec_index=0;

Yesbtn.addEventListener("click", function(){
    Catpic.src=images_happycat[Sec_index];

    Sec_index++;
    if(Sec_index >= images_happycat.length){
        Sec_index=0;
    };
    text.textContent="Yayyyyy!! I love you too.";
});

// Yesbtn.addEventListener("mouseleave", function() {
//     Catpic.src = "image/cat1.jpg";
// });

// Yesbtn.addEventListener("click", function(){
//     Catpic.src="image/cat7.gif";

//     text.textContent="Yayyyyy!! I love you too.";
// });

const messages = [
    "Are you sure?",
    "Please think again!",
    "Don't break my heart!",
    "Just click YES!"
];

let messageIndex = 0;

Nobtn.addEventListener("click", function() {
    text.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }
});