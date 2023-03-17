var listItem = document.querySelectorAll("#listItem li a");
listItem.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("active");
        // item.classList.add("activE");
        console.log(item);
        listItem.forEach(item1 => {
            if (item !== item1) {
                item1.classList.remove("active");
            }
        })
    })
})