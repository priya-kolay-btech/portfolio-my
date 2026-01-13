let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};


changeText();
setInterval(changeText, 3000)

// circle skill-------------------------------------------------
// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360 / dots;

//     for (let i = 0 ; i < dots ; i++) {
//         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for(let i = 0; i<percent ; i++){
//         pointsMarked[i].classList.add('marked')
//     }
// })
// document.querySelectorAll('.skill-bar .bar span').forEach(span => {
//         const targetWidth = span.getAttribute('data-width');
//         span.style.width = '0';
//         setTimeout(() => {
//             span.style.width = targetWidth;
//         }, 100);
//     });

//     // Circular skills
//     const circles = document.querySelectorAll('.circle');
//     circles.forEach(elem => {
//         const dots = parseInt(elem.getAttribute("data-dots"));
//         const marked = parseInt(elem.getAttribute("data-percent"));
//         const percent = Math.floor(dots * marked / 100);
//         const rotate = 360 / dots;

//         let pointsHTML = "";
//         for (let i = 0; i < dots; i++) {
//             pointsHTML += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//         }
//         elem.innerHTML = pointsHTML;

//         const pointsMarked = elem.querySelectorAll('.points');
//         for (let i = 0; i < percent; i++) {
//             pointsMarked[i].classList.add('marked');
//         }
//     });


// Animate technical skill bars
document.querySelectorAll('.skill-bar .bar span').forEach(span => {
    const targetWidth = span.getAttribute('data-width');
    span.style.width = '0';
    setTimeout(() => {
        span.style.width = targetWidth;
    }, 100);
});

// Circular skills with smooth animation and text update
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const dots = parseInt(circle.getAttribute("data-dots"));
    const percent = parseInt(circle.getAttribute("data-percent"));
    const rotate = 360 / dots;

    // Generate points
    let pointsHTML = "";
    for (let i = 0; i < dots; i++) {
        pointsHTML += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    circle.innerHTML = pointsHTML;

    const points = circle.querySelectorAll('.points');
    const text = circle.nextElementSibling.querySelector('big'); // select percentage text
    let current = 0;
    const totalMarked = Math.floor(dots * percent / 100);
    let currentPercent = 0;

    const interval = setInterval(() => {
        if (current >= totalMarked) {
            clearInterval(interval);
            text.textContent = percent + "%"; // final percentage
            return;
        }
        points[current].classList.add('marked');
        current++;
        currentPercent = Math.floor((current / dots) * 100);
        text.textContent = currentPercent + "%"; // update text as points fill
    }, 20); // adjust speed
});

// mix it up protfolio section-------------------------------------------------->
var mixer = mixitup('.portfolio-gallery');

// active menu--------------------------------------------------------------------------->
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar------------------------------------------------------------------------------>
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})

// toggle icon navbar-------------------------------------------------------------------------->
let menuIcon = document.querySelector("#menu-icon");
let navlist  = document.querySelector(".navlist");
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}