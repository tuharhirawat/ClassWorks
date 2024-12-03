// const fetchbtn = document.getElementById("search input");
// const itemlist = document.getElementById("itemlist");
// const items = document.getElementById("li");
// fetchbtn.addEventListener("input",()=>{
//     const input = document.getElementById("myInput");
//     const filter = input.value.toUpperCase();

// })
// const fetchbtn = document.getElementById("searchinput");
// const itemList = document.getElementById("item-list");
// const items = itemList.querySelectorAll("li");

// fetchbtn.addEventListener("input", () => {
//     const input = document.getElementById("MyInput")
//   const filter = searchInput.value.toLowerCase();

const searchInput = document.getElementById("search-input");
const itemList = document.getElementById("item-list");
const items = itemList.getElementsByTagName("li");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    Array.from(items).forEach((item) => {
        const text = item.textContent.toLowerCase();

        if (text.includes(filter)) {
            item.classList.remove("hidden");

            if (filter) {
             
                const startIndex = text.indexOf(filter);
                const endIndex = startIndex + filter.length;

               
                const beforeMatch = item.textContent.slice(0, startIndex);
                const match = item.textContent.slice(startIndex, endIndex);
                const afterMatch = item.textContent.slice(endIndex);

                
                item.innerHTML = beforeMatch + '<span class="highlight">' + match + '</span>' + afterMatch;
            } else {
                item.innerHTML = item.textContent; 
            }
        } else {
            item.classList.add("hidden");
        }
    });
});




  