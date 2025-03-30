//your code here!
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");
    let itemCount = 0;

    function addListItem(count) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${itemCount + 1}`;
            fragment.appendChild(listItem);
            itemCount++;
        }
        list.appendChild(fragment);
    }

    addListItem(10);

    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) {
            addListItem(2); 
        }
    });
});