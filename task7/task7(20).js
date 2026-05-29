// Task 20 — Real API Product Table

let productContainer = document.getElementById("products")

async function loadProducts() {

    let response = await fetch("https://fakestoreapi.com/products")

    let products = await response.json()

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p>Price : ₹${product.price}</p>

        </div>

        `

    })

}

loadProducts()