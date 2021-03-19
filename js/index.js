const secondSection = document.querySelector(".second-section");

const options = {

};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
     if(entry.isIntersecting) {
        entry.target.style.backgroundColor = "green";
     }else {
        entry.target.style.backgroundColor = "red";
     }
    });
}, options);

observer.observe(secondSection);