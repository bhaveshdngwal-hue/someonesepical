/* ==========================================
   Premium Compliment Website
   script.js - Part 1
========================================== */

// -------------------------------
// Compliments
// -------------------------------

const compliments = [

"🌸 Your smile makes the world brighter.",

"💖 You are appreciated more than you know.",

"✨ You make every moment feel special.",

"🌷 Your kindness inspires everyone around you.",

"🌈 You are stronger than you realize.",

"💕 You're someone's reason to smile today.",

"⭐ You deserve endless happiness.",

"🥰 Your heart is incredibly beautiful.",

"💝 Never forget how amazing you truly are.",

"🌼 You are one of a kind."

];

// -------------------------------

const giftBox = document.getElementById("giftBox");
const card = document.getElementById("card");
const compliment = document.getElementById("compliment");
const nextBtn = document.getElementById("nextBtn");

const music = document.getElementById("bgMusic");

const themeBtn = document.getElementById("themeBtn");

const heartBtn = document.getElementById("heartBtn");

const shareBtn = document.getElementById("shareBtn");

const letter = document.getElementById("letterText");

let opened = false;

let complimentCount = 0;

// =====================================
// Gift Box Opening
// =====================================

giftBox.addEventListener("click", () => {

if(opened) return;

opened = true;

giftBox.classList.add("open");

setTimeout(()=>{

card.classList.remove("hidden");

card.classList.add("show");

showCompliment();

startMusic();

launchConfetti();

},900);

});

// =====================================
// Compliment Generator
// =====================================

function showCompliment(){

const random = Math.floor(

Math.random()*compliments.length

);

compliment.classList.remove("fade");

void compliment.offsetWidth;

compliment.classList.add("fade");

compliment.innerHTML = compliments[random];

complimentCount++;
if(complimentCount===10){

    showEndingMessage();

}

if(complimentCount==10){

launchConfetti();

}

}

nextBtn.addEventListener("click",showCompliment);

// =====================================
// Background Music
// =====================================

function startMusic(){

music.volume=.5;

music.play().catch(()=>{});

document.body.classList.add("music-playing");

}

// =====================================
// Theme Toggle
// =====================================

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

});

// =====================================
// Heart Burst
// =====================================

heartBtn.addEventListener("click",()=>{

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.className="float-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top=(window.innerHeight-120)+"px";

heart.style.animationDelay=(Math.random()*0.4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2200);

}

});

// =====================================
// Share API
// =====================================

shareBtn.addEventListener("click",async()=>{

if(navigator.share){

try{

await navigator.share({

title:"Someone Special ❤️",

text:"A little surprise just for you 💖",

url:window.location.href

});

}catch(e){}

}else{

navigator.clipboard.writeText(

window.location.href

);

alert("Link copied ❤️");

}

});

// =====================================
// Typewriter Letter
// =====================================

const fullLetter=letter.innerText;

letter.innerHTML="";

let index=0;

function typeLetter(){

if(index<fullLetter.length){

letter.innerHTML+=fullLetter.charAt(index);

index++;

setTimeout(typeLetter,35);

}

}

// Start typing after gift opens

giftBox.addEventListener("click",()=>{

setTimeout(typeLetter,1800);

});

// =====================================
// Confetti
// =====================================

function launchConfetti(){

confetti({

particleCount:180,

spread:120,

origin:{y:.6}

});

}

// =====================================
// Welcome Console Message
// =====================================

console.log("Made with ❤️");
/* ==========================================
   PART 2A
   Flowers • Petals • Hearts • Sparkles
========================================== */

// ---------- Blooming Flowers ----------

const flowersContainer = document.querySelector(".flowers");

function createFlower() {

    const flower = document.createElement("div");
    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "%";
    flower.style.top = Math.random() * 90 + "%";
    flower.style.animationDelay = Math.random() * 2 + "s";

    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 8000);
}

setInterval(createFlower, 1800);

// ---------- Flower Petals ----------

const petalsContainer = document.querySelector(".petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = ["🌸","🌺","🌼"][Math.floor(Math.random()*3)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        6 + Math.random() * 6 + "s";

    petal.style.fontSize =
        18 + Math.random() * 18 + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);

}

setInterval(createPetal, 350);

// ---------- Heart Rain ----------

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        18 + Math.random()*22 + "px";

    heart.style.animationDuration =
        5 + Math.random()*5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 500);

// ---------- Cursor Sparkles ----------

document.addEventListener("mousemove",(e)=>{

    for(let i=0;i<2;i++){

        const star=document.createElement("div");

        star.className="sparkle";

        star.innerHTML=Math.random()>0.5?"✨":"⭐";

        star.style.left=
            (e.clientX+Math.random()*20-10)+"px";

        star.style.top=
            (e.clientY+Math.random()*20-10)+"px";

        document.body.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },900);

    }

});

// ---------- Floating Background Hearts ----------

function ambientHeart(){

    const h=document.createElement("div");

    h.className="float-heart";

    h.innerHTML="💖";

    h.style.left=Math.random()*window.innerWidth+"px";

    h.style.top=(window.innerHeight+40)+"px";

    h.style.animationDuration=
        3+Math.random()*3+"s";

    document.body.appendChild(h);

    setTimeout(()=>{
        h.remove();
    },5000);

}

setInterval(ambientHeart,2500);

// ---------- Auto Compliment Every 15 Seconds ----------

setInterval(()=>{

    if(opened){

        showCompliment();

    }

},15000);
/* ==========================================
   PART 3
   Final Effects & Utilities
========================================== */

// ===============================
// Gallery Click Animation
// ===============================

const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log("💖 Welcome!");

},500);

});

// ===============================
// Floating Sparkles
// ===============================

function createFloatingSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=Math.random()*window.innerWidth+"px";

sparkle.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1500);

}

setInterval(createFloatingSparkle,1200);

// ===============================
// Random Background Glow
// ===============================

setInterval(()=>{

document.body.style.filter=
"brightness("+(0.95+Math.random()*0.08)+")";

},3000);

// ===============================
// Surprise Confetti Every Minute
// ===============================

setInterval(()=>{

if(opened){

launchConfetti();

}

},60000);

// ===============================
// Keyboard Shortcut
// Press H for hearts
// ===============================

document.addEventListener("keydown",(e)=>{

if(e.key.toLowerCase()=="h"){

heartBtn.click();

}

});

// ===============================
// Double Click = Confetti
// ===============================

document.addEventListener("dblclick",()=>{

launchConfetti();

});

// ===============================
// Music Toggle by Spacebar
// ===============================

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

if(music.paused){

music.play();

}else{

music.pause();

}

}

});

// ===============================
// Compliment Counter
// ===============================

let totalViewed=0;

nextBtn.addEventListener("click",()=>{

totalViewed++;

if(totalViewed===5){

alert("💖 You're awesome! Keep smiling!");

}

if(totalViewed===10){

launchConfetti();

}

});

// ===============================
// Greeting Based on Time
// ===============================

const hour=new Date().getHours();

let greeting="Hello";

if(hour<12){

greeting="Good Morning ☀️";

}else if(hour<18){

greeting="Good Afternoon 🌸";

}else{

greeting="Good Evening 🌙";

}

console.log(greeting);

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Final Message
// ===============================

console.log("Website loaded successfully ❤️");
/* ===========================
   Final Surprise Message
=========================== */

const endingMessage = document.querySelector(".ending-message");

function showEndingMessage(){

    launchConfetti();

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.className="float-heart";

        heart.innerHTML=Math.random()>0.5?"❤️":"🌸";

        heart.style.left=Math.random()*window.innerWidth+"px";

        heart.style.top=window.innerHeight+"px";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

    endingMessage.classList.add("show");

    endingMessage.scrollIntoView({

        behavior:"smooth"

    });

}