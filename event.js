const Yesbtn= document.getElementById("btnYes");
const Nobtn= document.getElementById("btnNo");

const Text= document.getElementById("text");
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
    let x=Math.random()*250;
    let y=Math.random()*250;

    Nobtn.style.position ="absolute";
    Nobtn.style.left=x+"px";
    Nobtn.style.top=y+"px";

});

const images_happycat=[
    "image/cat8.webp",
    "image/cat7.gif",
    "image/cat9.jpg",
]
let Sec_index=0;

Yesbtn.addEventListener("mouseenter", function(){
    Catpic.src=images_happycat[Sec_index];

    Sec_index++;
    if(Sec_index >= images_happycat.length){
        Sec_index=0;
    };
});

Yesbtn.addEventListener("mouseleave", function() {
    Catpic.src = "image/cat1.jpg";
});

