/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});


/* =========================
   ACTIVE MENU HIGHLIGHT
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active");
        }

    });

});


/* =========================
   TYPING EFFECT
========================= */

const typingText =
document.querySelector(".hero h2");

const roles = [

"Quality Analyst",
"Automation Tester",
"API Tester",
"AI & ML Specialist"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(!isDeleting){

        typingText.innerHTML =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentRole.length){

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }
    else{

        typingText.innerHTML =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );

}

typeEffect();


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(

".card,\
.timeline-card,\
.skill-card,\
.project-card,\
.contact-card"

);

function revealOnScroll(){

    revealElements.forEach(el => {

        const elementTop =
        el.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(elementTop < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".stat h3");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const top =
    statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight){

        counterStarted = true;

        counters.forEach(counter => {

            const text =
            counter.innerText;

            let target =
            parseInt(text);

            if(isNaN(target))
                return;

            let current = 0;

            const increment =
            target / 40;

            const updateCounter = () => {

                current += increment;

                if(current < target){

                    counter.innerText =
                    Math.floor(current);

                    requestAnimationFrame(
                    updateCounter
                    );

                }
                else{

                    counter.innerText =
                    text;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener(
"scroll",
startCounters
);


/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================
   FLOATING SKILL CARDS
========================= */

const skillCards =
document.querySelectorAll(
".skill-card"
);

skillCards.forEach((card,index)=>{

    card.style.animation =
    `floatCard 3s ease-in-out ${index*0.1}s infinite`;

});


/* =========================
   CONTACT MODAL
========================= */

function showContact() {

    const modal =
    document.getElementById("contactModal");

    if(modal){
        modal.style.display = "flex";
    }

}

function closeContact() {

    const modal =
    document.getElementById("contactModal");

    if(modal){
        modal.style.display = "none";
    }

}

window.addEventListener("click", function(event){

    const modal =
    document.getElementById("contactModal");

    if(
        modal &&
        event.target === modal
    ){
        modal.style.display = "none";
    }

});