// Task 1 — Smart Attendance Checker

function checkExam(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam")
    } else {
        console.log("Not Allowed")
    }

}

checkExam(80, true)


// Task 2 — Mobile Password Strength Checker

function checkPassword(password) {

    let hasNumber = false
    let hasUppercase = false

    for (let char of password) {

        if (char >= "0" && char <= "9") {
            hasNumber = true
        }

        if (char >= "A" && char <= "Z") {
            hasUppercase = true
        }

    }

    if (password.length >= 8 && hasNumber && hasUppercase) {
        console.log("Strong Password")
    } else {
        console.log("Weak Password")
    }

}

checkPassword("Abc12345")


// Task 3 — Find Second Largest Number

let numbers = [10, 50, 80, 20, 90, 70]

let largest = 0
let secondLargest = 0

for (let num of numbers) {

    if (num > largest) {
        secondLargest = largest
        largest = num
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num
    }

}

console.log(secondLargest)


// Task 4 — Bus Seat Booking System

let seats = Array(10).fill(false)

function bookSeat(seatNumber) {

    if (seats[seatNumber - 1] === true) {
        console.log("Seat Already Booked")
    } else {
        seats[seatNumber - 1] = true
        console.log("Seat Booked Successfully")
    }

}

bookSeat(4)
bookSeat(4)


// Task 5 — ATM Cash Withdraw Logic

function withdrawMoney(balance, amount) {

    if (amount > balance) {
        return "Insufficient Balance"
    }

    if (balance - amount < 1000) {
        return "Minimum Balance Should Maintain 1000"
    }

    return "Withdraw Successful"

}

console.log(withdrawMoney(10000, 9500))


// Task 6 — Product Search Engine

let products = ["iphone", "samsung", "realme", "oppo"]

let searchProduct = "realme"

let productFound = false

for (let product of products) {

    if (product.toLowerCase() === searchProduct.toLowerCase()) {
        productFound = true
    }

}

if (productFound) {
    console.log("Product Found")
} else {
    console.log("Product Not Found")
}


// Task 7 — Voting Eligibility System

let age = 22
let hasVoterId = true
let citizenship = "Indian"

if (age >= 18) {

    if (hasVoterId === true && citizenship === "Indian") {
        console.log("Eligible to Vote")
    } else {
        console.log("Not Eligible")
    }

} else {
    console.log("Not Eligible")
}


// Task 8 — Online Food Order Bill

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100

    let totalBill = foodPrice + gstAmount + deliveryCharge - discount

    console.log("Total Bill : ₹" + totalBill)

}

calculateBill(400, 5, 50, 20)


// Task 9 — Reverse Word Without reverse()

let word = "javascript"

let reversedWord = ""

for (let i = word.length - 1; i >= 0; i--) {

    reversedWord = reversedWord + word[i]

}

console.log(reversedWord)


// Task 10 — Mini Instagram Like System

let isLiked = false
let totalLikes = 0

function toggleLike() {

    isLiked = !isLiked

    if (isLiked) {
        totalLikes++
    } else {
        totalLikes--
    }

    console.log(isLiked ? "Liked ❤️" : "Like 🤍")

    console.log("Total Likes :", totalLikes)

}

toggleLike()
toggleLike()