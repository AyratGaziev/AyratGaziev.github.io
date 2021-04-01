const animElements = document.querySelectorAll(".animte");
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
