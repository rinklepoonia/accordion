const accordion1 = document.querySelectorAll(".accordion1")
accordion1.forEach((e) => e.addEventListener("click", () => {
    var hide = e.classList.contains("active");
    accordion1.forEach((e) => {
        e.classList.remove("active");
    })
    if (!hide) {
        e.classList.toggle("active");
    }
}))




