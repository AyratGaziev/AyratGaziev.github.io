const animElements = document.querySelectorAll(".animte");
const email = document.querySelector("#email");
const telegram = document.querySelector("#telegram");
const github = document.querySelector("#github");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((el) => {
            if (
                el.isIntersecting &&
                !el.target.classList.contains("animated")
            ) {
                el.target.classList.add("animated");
            }
        });
    },
    {
        threshold: 1
    }
);
animElements.forEach((el) => {
    observer.observe(el);
});

email.addEventListener("transitionend", () => {
    console.log("work");
    telegram.classList.add("animated");
});
telegram.addEventListener("transitionend", () => {
    github.classList.add("animated");
});
