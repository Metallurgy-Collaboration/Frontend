const products = [];
const productTypes = []

class Product {
    constructor(name, type, image) {
        this.name = name;
        this.type = type;
        this.image = image;
    }

    get getName(){
        return this.name;
    }

    get getImage(){
        return this.image;
    }

    get getType(){
        return this.type;
    }
}

function initializeProducts(){
    for(let i = 0; i < productTypes.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("product-showcase");

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        let backgroundDiv = document.createElement("div");
        console.log(productTypes[i][2]);
        backgroundDiv.style.backgroundImage = "url('./images/" + productTypes[i][2] + "-" + (Math.floor(Math.random() * (productTypes[i][1] - 1)) + 1) + ".jpg')";

        let headerDiv = document.createElement('div');
        let header = document.createElement("h1");

        header.innerHTML = productTypes[i][0];
        headerDiv.appendChild(header);

        div1.append(backgroundDiv, headerDiv);

        for(let j = 0; j < products.length; j++){
            if(products[j].getType === i){
                let productDiv = document.createElement('div');
                let productImg = document.createElement('img');
                let revealingDiv = document.createElement('div');
                let productName = document.createElement('h1');
                let requestQuoteBtn = document.createElement("a");

                productImg.src = "./images/" + products[j].getImage + ".jpg"

                productName.innerHTML = products[j].getName;
                requestQuoteBtn.innerHTML = "Request A Quote";
                requestQuoteBtn.setAttribute("href", "../contact")

                revealingDiv.append(productName, requestQuoteBtn);

                productDiv.append(productImg, revealingDiv);
                div2.appendChild(productDiv);
            }
        }

        newDiv.append(div1, div2);
        newDiv.id = productTypes[i][2];

        document.getElementById('products').appendChild(newDiv);
    }
}

function initialize(){
    products.push(
        new Product("Cylinder Head And Block 1", 0, "cylinder-head-and-block-1"),
        new Product("Cylinder Head And Block 2", 0, "cylinder-head-and-block-2"),
        new Product("Cylinder Head And Block 3", 0, "cylinder-head-and-block-3"),
        new Product("Cylinder Head And Block 4", 0, "cylinder-head-and-block-4"),
        new Product("Cylinder Head And Block 5", 0, "cylinder-head-and-block-5"),
        new Product("Two Wheeler Gear Shifter 1", 1, "two-wheeler-gear-shifters-1"),
        new Product("Two Wheeler Gear Shifter 2", 1, "two-wheeler-gear-shifters-2"),
        new Product("Two Wheeler Gear Shifter 3", 1, "two-wheeler-gear-shifters-3"),
        new Product("Two Wheeler Gear Shifter 4", 1, "two-wheeler-gear-shifters-4"),
        new Product("Two Wheeler Gear Shifter 5", 1, "two-wheeler-gear-shifters-5"),
        new Product("Two Wheeler Gear Shifter 6", 1, "two-wheeler-gear-shifters-6"),
        new Product("Refrigeration Compressor Component 1", 2, "refrigeration-compressor-components-1"),
        new Product("Refrigeration Compressor Component 2", 2, "refrigeration-compressor-components-2"),
        new Product("Refrigeration Compressor Component 3", 2, "refrigeration-compressor-components-3"),
        new Product("Refrigeration Compressor Component 4", 2, "refrigeration-compressor-components-4"),
        new Product("Refrigeration Compressor Component 5", 2, "refrigeration-compressor-components-5"),
        new Product("Refrigeration Compressor Component 6", 2, "refrigeration-compressor-components-6"),
        new Product("Turbocharger 1", 3, "turbocharger-1"),
        new Product("Turbocharger 2", 3, "turbocharger-2"),
        new Product("Turbocharger 3", 3, "turbocharger-3"),
        new Product("Other 1", 4, "other-1"),
        new Product("Other 2", 4, "other-2"),
        new Product("Other 3", 4, "other-3"),
        new Product("Fuel Pump Cover 1", 4, "fuel-pump-cover-1"),
        new Product("Fuel Pump Cover 2", 4, "fuel-pump-cover-2"),
        new Product("Impeller", 4, "impeller"),
        new Product("RM Center Section", 4, "rm-center-section")
    );

    let numberOfProducts = 0;

    for(let i = 0; i < products.length; i++){
        console.log(productTypes.length, products[i].getType);
        if(productTypes.length < products[i].getType || i === products.length - 1) {
            productTypes.push([products[i - numberOfProducts].getName.substring(0, products[i - numberOfProducts].getName.length - 2), numberOfProducts, products[i - numberOfProducts].getImage.substring(0, products[i - numberOfProducts].getImage.length - 2)]);
            numberOfProducts = 0;
        } numberOfProducts++;
    }

    productTypes[productTypes.length - 1][1]++;

    initializeProducts();

    console.log(productTypes)
}

initialize();