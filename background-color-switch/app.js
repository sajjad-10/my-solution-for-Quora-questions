var itemsEl = document.querySelectorAll(".button");
var bodyEl = document.body;
// document.body.style.backgroundColor = 'blue'
itemsEl.forEach((item) => {
    item.addEventListener("click", (e) => {
        const colorSelected = e.target.getAttribute("id");
        // console.log(colorSelected);
        bodyEl.style.backgroundColor = colorSelected
    });
});