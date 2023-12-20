// const accordion1 = document.querySelectorAll(".accordion1")
// const accordionHead = document.querySelectorAll(".accordionHead")
// accordionHead.forEach((e) => e.addEventListener("click", () => {
//     var hide = e.classList.contains("active");
//     e.forEach((e) => {
//         e.classList.remove("active");
//     })
//     // if (!hide) {
//     //     e.classList.toggle("active");
//     // }
// }))




const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.toggle("active")
    })
})