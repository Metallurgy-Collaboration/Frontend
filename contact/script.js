const products = [];
let selectedProduct;

class Product {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    get getName(){
        return this.name;
    }

    get getImage(){
        return "../products/images/" + this.image + ".jpg"
    }
}

function selectSearchResult(resultIndex, productIndex){
    let elemNum = 0;

    document.querySelectorAll(".dropdown-item").forEach(function(element){
        element.classList.value = "dropdown-item"
    })

    document.querySelectorAll(".dropdown-item").forEach(function(element){
        if(resultIndex == elemNum) element.classList.add("dropdown-selected");
        else element.classList.add("dropdown-not-selected");

        elemNum++;
    })

    selectedProduct = productIndex;
}

async function sendEmail(){
    const response = await fetch('https://us-central1-metallurgy-collaborations.cloudfunctions.net/app', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
            name: document.getElementById("name-input").value,
            email: document.getElementById("email-input").value,
            phone: document.getElementById("phone-input").value,
            product: products[selectedProduct].getName,
            message: document.getElementById("message").value
        }),
        mode: 'cors'
    })

    const context = await response;
    console.log(context)

    if(context.status === 500){
        document.getElementById("send-modal").classList.add("active-modal")
        setTimeout(function(){
            document.getElementById("send-modal").classList.remove("active-modal")
        }, 5000)
    }
}

function createSearchResult(name, image, productIndex, resultIndex){
    let newDiv = document.createElement("div");
    let newImg = document.createElement('img');
    let newHeader = document.createElement("h1");

    newImg.src = image;
    newHeader.innerHTML = name;

    let checkDiv = document.createElement("div");
    let check = document.createElement('img');

    check.src = "./icons/check.png";

    checkDiv.appendChild(check);
    newDiv.append(newImg, newHeader, checkDiv);
    newDiv.setAttribute("onclick", "selectSearchResult(" + resultIndex + ", " + productIndex + ")");
    newDiv.classList.add("dropdown-item");

    document.getElementById('products-dropdown-list').appendChild(newDiv);
}

function search(){
    let resultsNumber = 0;

    document.getElementById("products-dropdown-list").innerHTML = ""

    for(let i = 0; i < products.length; i++) if(products[i].getName.toLowerCase().includes(document.getElementById("products-search-input").value.toLowerCase())){
        createSearchResult(products[i].getName, products[i].getImage, i, resultsNumber);
        resultsNumber++;
    }

    document.getElementById("products-dropdown").classList.add("active-dropdown");
}

function initialize(){
    products.push(
        new Product("Cylinder Head And Block 1", "cylinder-head-and-block-1"),
        new Product("Cylinder Head And Block 2", "cylinder-head-and-block-2"),
        new Product("Cylinder Head And Block 3", "cylinder-head-and-block-3"),
        new Product("Cylinder Head And Block 4", "cylinder-head-and-block-4"),
        new Product("Cylinder Head And Block 5", "cylinder-head-and-block-5"),
        new Product("Two Wheeler Gear Shifter 1", "two-wheeler-gear-shifters-1"),
        new Product("Two Wheeler Gear Shifter 2", "two-wheeler-gear-shifters-2"),
        new Product("Two Wheeler Gear Shifter 3", "two-wheeler-gear-shifters-3"),
        new Product("Two Wheeler Gear Shifter 4", "two-wheeler-gear-shifters-4"),
        new Product("Two Wheeler Gear Shifter 5", "two-wheeler-gear-shifters-5"),
        new Product("Two Wheeler Gear Shifter 6", "two-wheeler-gear-shifters-6"),
        new Product("Refrigeration Compressor Component 1", "refrigeration-compressor-components-1"),
        new Product("Refrigeration Compressor Component 2", "refrigeration-compressor-components-2"),
        new Product("Refrigeration Compressor Component 3", "refrigeration-compressor-components-3"),
        new Product("Refrigeration Compressor Component 4", "refrigeration-compressor-components-4"),
        new Product("Refrigeration Compressor Component 5", "refrigeration-compressor-components-5"),
        new Product("Refrigeration Compressor Component 6", "refrigeration-compressor-components-6"),
        new Product("Turbocharger 1", "turbocharger-1"),
        new Product("Turbocharger 2", "turbocharger-2"),
        new Product("Turbocharger 3", "turbocharger-3"),
        new Product("Other 1", "other-1"),
        new Product("Other 2", "other-2"),
        new Product("Other 3", "other-3"),
        new Product("Fuel Pump Cover 1", "fuel-pump-cover-1"),
        new Product("Fuel Pump Cover 2", "fuel-pump-cover-2"),
        new Product("Impeller", "impeller"),
        new Product("RM Center Section", "rm-center-section")
    );
}

initialize();