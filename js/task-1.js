const listItems = document.querySelectorAll(".item");
const itemCount = listItems.length;
console.log(`Number of categories: ${itemCount}`);


const titles = document.querySelectorAll("h2");
titles.forEach(title => {
    title.classList.add("js-title");
});
const itemsList = document.querySelectorAll(".category-list li");
itemsList.forEach(item => {
    item.classList.add("js-item");
})

// console.log(titles);
// console.log(itemsList);

const titlesList = document.querySelectorAll(".js-title");
titlesList.forEach(el => {
    const titleContent = el.textContent;
    const elCount = el.nextElementSibling.querySelectorAll(".js-item").length;

console.log(`Category: ${titleContent}`);
console.log(`Elements: ${elCount}`);
});
