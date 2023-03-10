let currentSlide = 0;

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

function createSlideshowElem(image){
    let newDiv = document.createElement('div');
    newDiv.classList.add("main-container-bg")
    newDiv.style.background = "url('./images/" + image + "'), #999";
    newDiv.style.backgroundBlendMode = "multiply";
    newDiv.style.backgroundSize = "cover";
    newDiv.style.backgroundPosition = "center";

    document.getElementById('main-container-bgs').appendChild(newDiv)
}

function createProduct(name, image, description, link){
    let newDiv = document.createElement("div")
    newDiv.classList.add("product")

    let imageDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = "products/images/" + image;

    imageDiv.appendChild(img);

    let textDiv = document.createElement("div");
    let header = document.createElement("h1");
    let para = document.createElement("p");
    let btn = document.createElement("a");

    header.innerHTML = name;
    para.innerHTML = description;
    btn.innerHTML = "Browse Products";
    btn.setAttribute("href", link);

    textDiv.append(header, para, btn);

    newDiv.append(imageDiv, textDiv);
    document.getElementById("products-categories").appendChild(newDiv);
}

function updateSlideshow(){
    document.querySelectorAll(".main-container-bg")[currentSlide].classList.remove("active-container-bg");

    currentSlide++;
    if(currentSlide == document.querySelectorAll(".main-container-bg").length) currentSlide = 0;

    document.querySelectorAll(".main-container-bg")[currentSlide].classList.add("active-container-bg");
}

function initialize(){
    for(let i = 0; i < companies.length; i++){
        let elem = document.createElement("img");
        elem.setAttribute("src", "./images/companies/" + companies[i] + ".png");

        document.getElementById("companies-list").appendChild(elem);
    }

    createSlideshowElem("electrical.jpeg")
    createSlideshowElem("office.jpeg")
    createSlideshowElem("workers.jpeg")
    createSlideshowElem("Unit.jpg")
    createSlideshowElem("ashok.jpeg")

    document.querySelectorAll(".main-container-bg")[0].classList.add("active-container-bg");

    createProduct("Cylinders Head & Block", "cylinder-head-and-block-4.jpg", "Expertly crafted components designed for high-performance engines, providing exceptional durability and strength with advanced metallurgical properties and innovative design.", "./products#cylinders-head-and-block")
    createProduct("Two Wheeler Gear Shifters", "two-wheeler-gear-shifters-2.jpg", "Precision-engineered components designed to provide smooth and accurate gear shifts, ensuring reliable and comfortable riding experience.", "./products#two-wheeler-gear-shifters")
    createProduct("Refrigeration Compressor Components", "refrigeration-compressor-components-1.jpg", "High-quality and durable components designed to deliver optimal performance in refrigeration systems, ensuring efficient and reliable cooling.", "./products#refrigeration-compressor-components")
    createProduct("Turbochargers", "turbocharger-3.jpg", "High-performance component designed with advanced metallurgical properties and precise engineering to deliver exceptional power, efficiency and reliability to automotive engines.", "./products#turbochargers")
    createProduct("Other Products", "other-1.jpg", "Discover our diverse range of high-quality and durable products designed with advanced metallurgical properties and precision engineering, offering optimal performance and reliability across various industries.", "./products#miscellaneous")


    const slideshowInterval = setInterval(updateSlideshow, 5000);
}

initialize();