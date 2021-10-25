let accordionItem = document.querySelectorAll(".accordion-item");
let title = document.querySelectorAll(".title");

title.forEach(t => t.addEventListener("click", function (e) {
    e.preventDefault();
    accordionItem.forEach((item) => {
        item.classList.remove("show");
    });
    this.parentElement.classList.add("show");
}));
