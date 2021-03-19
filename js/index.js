const secondSection = document.querySelector(".second-section");
const box = document.querySelector(".box");

const options = {

};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
     if(entry.isIntersecting) {
        entry.target.style.backgroundColor = "white";
        box.style.animation = "fading 2s infinite"
        console.log("in")
     }else {
        // entry.target.style.backgroundColor = "green";
     }
    });
}, options);

observer.observe(secondSection);