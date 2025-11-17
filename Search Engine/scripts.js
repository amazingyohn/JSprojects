const accessKey = "Vy2AM5db113vK5McyejrU887hNM3XSA-vo36h6czRtk";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn")



let keyword = "";
let pageNumber = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=1&query=office&query=${keyword}&page=${pageNumber}&per-page${12}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (pageNumber === 1) {
        searchResult.innerHTML = "";
    }

    // console.log(data)

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreButton.style.display = "block"

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    pageNumber = 1;
    searchImage()
})

showMoreButton.addEventListener("click", ()=>{
    pageNumber ++;
    searchImage()
})