// Task 21 — Small E-Commerce Logic

let allProducts = []

let cart = []

let productContainer = document.getElementById("products")

async function loadProducts() {

    let response = await fetch("https://fakestoreapi.com/products")

    allProducts = await response.json()

    displayProducts(allProducts)

}

function displayProducts(products) {

    productContainer.innerHTML = ""

    products.forEach(product => {

        productContainer.innerHTML += `

        <div style="border:1px solid gray; margin:10px; padding:10px">

            <h3>${product.title}</h3>

            <p>Price : ₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>

        `

    })

}

function showElectronics() {

    let electronicsProducts = allProducts.filter(product => {
        return product.category === "electronics"
    })

    displayProducts(electronicsProducts)

}

function sortProducts() {

    let sortedProducts = [...allProducts]

    sortedProducts.sort((a, b) => a.price - b.price)

    displayProducts(sortedProducts)

}

function searchProduct() {

    let keyword = document.getElementById("search").value.toLowerCase()

    let searchedProducts = allProducts.filter(product => {

        return product.title.toLowerCase().includes(keyword)

    })

    displayProducts(searchedProducts)

}

function addToCart(id) {

    let selectedProduct = allProducts.find(product => {
        return product.id === id
    })

    cart.push(selectedProduct)

    calculateTotal()

}

function calculateTotal() {

    let total = cart.reduce((sum, product) => {

        return sum + product.price

    }, 0)

    document.getElementById("cartTotal").innerText =
        "Cart Total : ₹" + total.toFixed(2)

}

loadProducts()