const tl = gsap.timeline({defaults: {ease: "power3.out", duration: 0.75}});
tl.fromTo('.container', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, ease: "elastic.out(1,0.9)", duration: 1.25})
    .fromTo('.container-leftpanel', {x: "-70%", opacity: 0, rotate: "-45deg"}, {
        x: "0%", opacity: 1, rotate: "0deg"
    }, "<45%")
    .fromTo('.container-rightpanel', {x: "70%", opacity: 0}, {x: "0%", opacity: 1}, "<")
    .fromTo('.container-image', {y: "25%", rotate: "0deg"}, {y: "-35%", rotate: "-15deg", yoyo: true, repeat: -1});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    gsap.to(".container", {y: "100%", opacity: 0, ease: "power3.out", duration: 0.75});
});