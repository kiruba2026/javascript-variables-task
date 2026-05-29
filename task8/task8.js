let apiLink = "https://fakestoreapi.com/products"

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        // Task 1 — Print All Products

        console.log("Task 1")

        products.forEach(product => {

            console.log("Title :", product.title)
            console.log("Price :", product.price)

        })


        // Task 2 — Print Only Product Titles

        console.log("Task 2")

        products.forEach(product => {

            console.log(product.title)

        })


        // Task 3 — Print Total Products

        console.log("Task 3")

        console.log("Total Products :", products.length)


        // Task 4 — Print All Categories

        console.log("Task 4")

        let categories = [...new Set(products.map(product => product.category))]

        categories.forEach(category => {

            console.log(category)

        })


        // Task 5 — Print Products Above $50

        console.log("Task 5")

        let aboveFifty = products.filter(product => product.price > 50)

        aboveFifty.forEach(product => {

            console.log(product.title + " - " + product.price)

        })


        // Task 6 — Print Products Below $50

        console.log("Task 6")

        let belowFifty = products.filter(product => product.price < 50)

        belowFifty.forEach(product => {

            console.log(product.title + " - " + product.price)

        })


        // Task 7 — Find First Product Above $100

        console.log("Task 7")

        let firstProduct = products.find(product => product.price > 100)

        console.log(firstProduct)


        // Task 8 — Search Product

        console.log("Task 8")

        let searchText = "shirt"

        let searchedProducts = products.filter(product => {

            return product.title.toLowerCase().includes(searchText)

        })

        console.log(searchedProducts)


        // Task 9 — Count Electronics Products

        console.log("Task 9")

        let electronicsProducts = products.filter(product => {

            return product.category === "electronics"

        })

        console.log("Electronics Count :", electronicsProducts.length)


        // Task 10 — Print Highest Price Product

        console.log("Task 10")

        let highestPriceProduct = products.reduce((highest, current) => {

            return current.price > highest.price
                ? current
                : highest

        })

        console.log(highestPriceProduct)

    


            // Task 11 — Print Lowest Price Product

        console.log("Task 11")

        let lowestPriceProduct = products.reduce((lowest, current) => {

            return current.price < lowest.price
                ? current
                : lowest

        })

        console.log(lowestPriceProduct)


        // Task 12 — Calculate Total Price of All Products

        console.log("Task 12")

        let totalPrice = products.reduce((sum, product) => {

            return sum + product.price

        }, 0)

        console.log("Total Price :", totalPrice.toFixed(2))


        // Task 13 — Calculate Average Product Price

        console.log("Task 13")

        let averagePrice = totalPrice / products.length

        console.log("Average Price :", averagePrice.toFixed(2))


        // Task 14 — Print Product With Highest Rating

        console.log("Task 14")

        let highestRatedProduct = products.reduce((best, current) => {

            return current.rating.rate > best.rating.rate
                ? current
                : best

        })

        console.log("Title :", highestRatedProduct.title)
        console.log("Rating :", highestRatedProduct.rating.rate)


        // Task 15 — Print Product With Lowest Rating

        console.log("Task 15")

        let lowestRatedProduct = products.reduce((lowest, current) => {

            return current.rating.rate < lowest.rating.rate
                ? current
                : lowest

        })

        console.log("Title :", lowestRatedProduct.title)
        console.log("Rating :", lowestRatedProduct.rating.rate)


        // Task 16 — Category Wise Product Count

        console.log("Task 16")

        let categoryCount = products.reduce((count, product) => {

            count[product.category] =
                (count[product.category] || 0) + 1

            return count

        }, {})

        console.log(categoryCount)


        // Task 17 — Create Discounted Products

        console.log("Task 17")

        let discountedProducts = products.map(product => {

            return {
                title: product.title,
                oldPrice: product.price,
                newPrice: (product.price * 0.90).toFixed(2)
            }

        })

        console.log(discountedProducts)


        // Task 18 — Sort Products Low To High

        console.log("Task 18")

        let lowToHigh = [...products]

        lowToHigh.sort((a, b) => a.price - b.price)

        console.log(lowToHigh)


        // Task 19 — Sort Products High To Low

        console.log("Task 19")

        let highToLow = [...products]

        highToLow.sort((a, b) => b.price - a.price)

        console.log(highToLow)


        // Task 20 — Check Any Product Above $500

        console.log("Task 20")

        let productAbove500 = products.some(product => {

            return product.price > 500

        })

        console.log(productAbove500)


              // Task 21 — Check All Products Above Rating 3

        console.log("Task 21")

        let allAboveThree = products.every(product => {

            return product.rating.rate > 3

        })

        console.log(allAboveThree)


        // Task 22 — Print Top 5 Costliest Products

        console.log("Task 22")

        let topFiveCostliest = [...products]

        topFiveCostliest
            .sort((a, b) => b.price - a.price)
            .slice(0, 5)
            .forEach(product => {

                console.log(product.title)

            })


        // Task 23 — Print Top 5 Rated Products

        console.log("Task 23")

        let topFiveRated = [...products]

        topFiveRated
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 5)
            .forEach(product => {

                console.log(product.title)

            })


        // Task 24 — Group Products By Category

        console.log("Task 24")

        let groupedProducts = products.reduce((group, product) => {

            if (!group[product.category]) {

                group[product.category] = []

            }

            group[product.category].push(product)

            return group

        }, {})

        console.log(groupedProducts)


        // Task 25 — Convert Product Prices To INR

        console.log("Task 25")

        products.forEach(product => {

            console.log(
                product.title,
                "₹" + (product.price * 85).toFixed(2)
            )

        })


        // Task 26 — Amazon Product Filter

        console.log("Task 26")

        let amazonProducts = products.filter(product => {

            return product.price < 500 &&
                   product.rating.rate > 4 &&
                   product.category === "electronics"

        })

        console.log(amazonProducts)


        // Task 27 — Best Seller Product

        console.log("Task 27")

        let bestSeller = products.reduce((best, current) => {

            return current.rating.rate > best.rating.rate
                ? current
                : best

        })

        console.log(bestSeller)


        // Task 28 — Product Analytics Dashboard

        console.log("Task 28")

        console.log("Total Products :", products.length)

        console.log("Total Categories :", categories.length)

        console.log("Highest Price Product :", highestPriceProduct.title)

        console.log("Lowest Price Product :", lowestPriceProduct.title)

        console.log("Average Price :", averagePrice.toFixed(2))

        console.log("Best Rated Product :", highestRatedProduct.title)


        // Task 29 — Inventory Report

        console.log("Task 29")

        console.log(
            "Expensive Products :",
            products.filter(product => product.price > 100).length
        )

        console.log(
            "Affordable Products :",
            products.filter(product => product.price <= 100).length
        )

        console.log(
            "Electronics :",
            products.filter(product =>
                product.category === "electronics"
            ).length
        )

        console.log(
            "Jewellery :",
            products.filter(product =>
                product.category === "jewelery"
            ).length
        )

        console.log(
            "Mens Clothing :",
            products.filter(product =>
                product.category === "men's clothing"
            ).length
        )

        console.log(
            "Womens Clothing :",
            products.filter(product =>
                product.category === "women's clothing"
            ).length
        )


        // Task 30 — Complete Admin Dashboard

        console.log("==============================")

        console.log("TOTAL PRODUCTS :", products.length)

        console.log("TOTAL CATEGORIES :", categories.length)

        console.log("TOTAL PRICE :", totalPrice.toFixed(2))

        console.log("AVERAGE PRICE :", averagePrice.toFixed(2))

        console.log("HIGHEST PRICE PRODUCT :", highestPriceProduct.title)

        console.log("LOWEST PRICE PRODUCT :", lowestPriceProduct.title)

        console.log("BEST RATED PRODUCT :", highestRatedProduct.title)

        console.log("LOWEST RATED PRODUCT :", lowestRatedProduct.title)

        console.log(
            "PRODUCTS ABOVE $100 :",
            products.filter(product => product.price > 100).length
        )

        console.log(
            "PRODUCTS BELOW $50 :",
            products.filter(product => product.price < 50).length
        )

        console.log("CATEGORY COUNTS :", categoryCount)

        console.log("==============================")  

        })
.catch(error => {
    console.log(error)
})
.finally(() => {
    console.log("API Completed")
})