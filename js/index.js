// const secondSection = document.querySelector(".second-section");
// const box = document.querySelector(".box");

// const options = {

// };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//      if(entry.isIntersecting) {
//         entry.target.style.backgroundColor = "white";
//         box.style.animation = "fading 2s infinite"
//         console.log("in")
//      }else {
//         // entry.target.style.backgroundColor = "green";
//      }
//     });
// }, options);

// observer.observe(secondSection);

anime({
  targets: "div.cards h1",
  translateX: [600, 0],
  duration: 1000,
  easing: "easeInOutQuad",
});

const navMenu = document.querySelector(".nav-links");
const menuButton = document.querySelector("i.fas.fa-bars");
const closeButton = document.querySelector("i.fas.fa-times");

const mediaQuery = window.matchMedia("(max-width: 730px)");

handleTabletChange = (e) => {
  if (!e.matches) {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
    closeButton.style.display = "none";
    menuButton.style.display = "block";
  }
};

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

menuButton.onclick = () => {
  navMenu.style.display = "block";
  menuButton.style.display = "none";
  closeButton.style.display = "block";
};

closeButton.onclick = () => {
  navMenu.style.display = "none";
  closeButton.style.display = "none";
  menuButton.style.display = "block";
};
