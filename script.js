const companies = [
    "advik",
    "bajaj",
    "cati",
    "comet",
    "duroshox",
    "et",
    "exedy",
    "faster",
    "kirloskar",
    "seinumero",
    "tecumseh",
    "tvs",
    "veljan",
    "vst-shakti"
]

function initialize(){
    for(let i = 0; i < companies.length; i++){
        let elem = document.createElement("img");
        elem.setAttribute("src", "./images/companies/" + companies[i] + ".png");

        document.getElementById("companies-list").appendChild(elem);
    }
}

initialize();