let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    //1.Div Container--Result Item
    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    searchResultsE1.appendChild(resultItemE1);
    //2.Anchor Title--Result-Title
    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-item");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultItemE1.appendChild(resultTitleE1);
    //3.title-Break
    let titleBreakE1 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE1);
    //4.Anchor URL-- result-URL
    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.textContent = link;
    urlE1.target = "_blank";
    resultItemE1.appendChild(urlE1);
    //5.line-Break
    let lineBreakE1 = document.createElement("br");
    resultItemE1.appendChild(lineBreakE1);
    //6.paragraph Description -- line-description
    let descriptionE1 = document.createElement("p");
    descriptionE1.classList.add("line-description");
    descriptionE1.textContent = description;
    resultItemE1.appendChild(descriptionE1);
}

function displayResults(searchResults) {
    spinnerE1.classList.toggle("d-none");
    for (let result of searchResults) {

        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsE1.textContent = "";
        let searchInput = searchInputE1.value;
        //console.log(searchInput);
        spinnerE1.classList.toggle("d-none");
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsondata) {
                //console.log(jsondata);
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            })
    }
}
searchInputE1.addEventListener("keydown", searchWikipedia);