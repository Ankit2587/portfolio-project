// Welcome Message
window.onload = function(){

    alert("Welcome to Ankit's Portfolio Website!");
};

// Typing Animation

const texts = [
    "Web Developer",
    "Frontend Developer",
    "Tech Enthusiast",
    "B.Tech CSE Student"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText(){

    if(charIndex < texts[index].length){

        typing.textContent += texts[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        typing.textContent =
        texts[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        index++;

        if(index >= texts.length){
            index = 0;
        }

        setTimeout(typeText,500);
    }
}

typeText();


// Dark Mode

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";
    }

});


// Contact Form Validation

const form =
document.getElementById("contactForm");

const message =
document.getElementById("formMessage");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const msg =
    document.getElementById("message").value.trim();

    if(name === "" ||
       email === "" ||
       msg === ""){

        message.textContent =
        "Please fill all fields.";

        message.style.color = "red";

        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        message.textContent =
        "Please enter a valid email.";

        message.style.color = "red";

        return;
    }

    message.textContent =
    "Message sent successfully!";

    message.style.color = "green";

    alert("Thank you for contacting me!");

    form.reset();

});