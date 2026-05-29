// Task 1 — E-Commerce Product Filter

async function getProducts() {

    let response = await fetch("https://fakestoreapi.com/products/")

    let products = await response.json()

    let filteredProducts = products.filter(product => {
        return product.price > 100 &&
               product.category === "electronics"
    })

    filteredProducts.forEach(product => {
        console.log(product.title)
        console.log(product.price)
    })

}

getProducts()


// Task 2 — Online Shopping Cart Total

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
]

let totalBill = cart.reduce((total, item) => {
    return total + (item.price * item.qty)
}, 0)

console.log(totalBill)


// Task 3 — Employee Salary Dashboard

let employees = [
    { name: "John", salary: 25000 },
    { name: "Sam", salary: 50000 },
    { name: "Ravi", salary: 45000 },
    { name: "Kumar", salary: 30000 }
]

let highSalaryEmployees = employees
    .filter(employee => employee.salary > 40000)
    .map(employee => employee.name)

highSalaryEmployees.forEach(name => {
    console.log(name)
})


// Task 4 — Food Delivery App

let hotels = [
    { hotel: "A2B", rating: 4.1 },
    { hotel: "KFC", rating: 4.7 },
    { hotel: "Dominos", rating: 4.3 }
]

let bestHotel = hotels.find(hotel => hotel.rating > 4.5)

console.log(bestHotel.hotel)


// Task 5 — Student Pass/Fail System

let marks = [45, 67, 89, 90, 34]

let allPassed = marks.every(mark => mark >= 35)

console.log(allPassed)


// Task 6 — OTP Verification System

let otpList = [1234, 4567, 7890, 9876]

let enteredOtp = 4567

console.log(otpList.includes(enteredOtp))


// Task 7 — Movie Booking Timer

let count = 10

let timer = setInterval(() => {

    console.log(count)

    if (count === 0) {
        clearInterval(timer)
        console.log("Booking Closed")
    }

    count--

}, 1000)


// Task 8 — Instagram Like Counter

let likes = 0

let likeCounter = setInterval(() => {

    likes++

    console.log("Likes :", likes)

    if (likes === 10) {
        clearInterval(likeCounter)
    }

}, 1000)


// Task 9 — Login Authentication

let username = "admin"

let password = "12345"

if (username === "admin" && password === "12345") {
    console.log("Login Success")
} else {
    console.log("Invalid Credentials")
}


// Task 10 — Weather App Simulation

let internet = true

let weatherPromise = new Promise((resolve, reject) => {

    if (internet) {
        resolve("Weather Data")
    } else {
        reject("No Internet")
    }

})

weatherPromise
    .then(data => console.log(data))
    .catch(error => console.log(error))


// Task 11 — Amazon Product Search

let products = [
    "blue shirt",
    "watch",
    "red shirt",
    "mobile"
]

let shirts = products.filter(product =>
    product.includes("shirt")
)

console.log(shirts)


// Task 12 — YouTube Video Duration

let videos = [10, 20, 30, 40]

let totalWatchTime = videos.reduce((total, video) => {
    return total + video
}, 0)

console.log(totalWatchTime)


// Task 13 — Swiggy Order Status

let status = "Preparing"

switch (status) {

    case "Placed":
        console.log("Order Placed")
        break

    case "Preparing":
        console.log("Food Preparing")
        break

    case "Out for Delivery":
        console.log("Out for Delivery")
        break

    case "Delivered":
        console.log("Order Delivered")
        break

    default:
        console.log("Invalid Status")
}


// Task 14 — WhatsApp Chat Analyzer

let chats = ["hi", "hello", "where", "ok", "bye"]

console.log("Total Messages :", chats.length)

for (let chat of chats) {
    console.log(chat)
}


// Task 15 — Netflix Age Restriction

let age = 16

console.log(
    age >= 18
        ? "Watch Movie"
        : "Access Denied"
)


// Task 16 — Flipkart Product Sorting

let prices = [1200, 450, 9999, 2500, 700]

prices.sort((a, b) => a - b)

console.log(prices)


// Task 17 — Employee Attendance

let attendance = [
    "present",
    "absent",
    "present"
]

let attendanceCount = attendance.reduce((count, status) => {

    count[status] = (count[status] || 0) + 1

    return count

}, {})

console.log(attendanceCount)


// Task 18 — Banking System

let balance = 5000

function deposit(amount) {

    balance += amount

}

function withdraw(amount) {

    if (amount <= balance) {
        balance -= amount
    } else {
        console.log("Insufficient Balance")
    }

}

function checkBalance() {

    console.log("Balance :", balance)

}

deposit(2000)

withdraw(1000)

checkBalance()


// Task 19 — Zomato Rating Checker

let ratings = [4.5, 4.2, 2.8, 4.9]

let lowRating = ratings.some(rating => rating < 3)

console.log(lowRating)