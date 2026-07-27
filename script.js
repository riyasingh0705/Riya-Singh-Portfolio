const text = [
    "Web Developer",
    "Frontend Developer"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text[index].length) {

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type, 120);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent=text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,60);

    }

    else{

        index++;

        if(index>=text.length){

            index=0;

        }

        setTimeout(type,300);

    }

}

type();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});