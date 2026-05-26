// Task 1 — Employee Bonus Filter

let employees = [
    { name: "john", salary: 200000 },
    { name: "rahul", salary: 500000 },
    { name: "siva", salary: 700000 }
]

let bonusEmployees = employees.filter(employee => employee.salary > 300000)

bonusEmployees.forEach(employee => {
    console.log("Congrats " + employee.name)
})


// Task 2 — Shopping Cart Total

let cart = [1200, 3400, 500, 999]

let total = cart.reduce((totalAmount, item) => {
    return totalAmount + item
}, 0)

console.log(total)


// Task 3 — Login Username Formatter

let user = "naveen"

let formattedName =
    user.slice(0, 1).toUpperCase() +
    user.slice(1).toLowerCase()

console.log(formattedName)


// Task 4 — OTP Checker

let otp = "560890"

if (otp.includes("0")) {
    console.log("Valid OTP")
} else {
    console.log("Invalid OTP")
}


// Task 5 — Food Delivery App

let orders = ["burger", "pizza"]

orders.push("shawarma")

orders.pop()

console.log(orders)


// Task 6 — Attendance Checker

let marks = [40, 50, 70, 80]

let result = marks.every(mark => mark >= 35)

console.log(result)


// Task 7 — Find VIP Customer

let customers = [
    { name: "arun", purchase: 5000 },
    { name: "vijay", purchase: 15000 },
    { name: "surya", purchase: 25000 }
]

let vipCustomer = customers.find(customer => customer.purchase > 10000)

console.log(vipCustomer.name)


// Task 8 — Reverse Chat Message

let msg = "hello"

let reversedMessage = msg.split("").reverse().join("")

console.log(reversedMessage)


// Task 9 — Remove Duplicate Product

let products = ["tv", "laptop", "mobile", "watch"]

console.log(products.indexOf("mobile"))


// Task 10 — Student Rank Sort

let studentMarks = [99, 45, 12, 67, 89]

studentMarks.sort((a, b) => a - b)

console.log(studentMarks)


// Task 11 — Movie Search

let movies = ["Jailer", "Leo", "Vikram"]

let movieExists = movies.some(movie => movie === "Leo")

console.log(movieExists)


// Task 12 — Hide Mobile Number

let number = "6383366774"

let lastFourDigits = number.slice(-4)

console.log(lastFourDigits)


// Task 13 — Online Exam Result

let mark = 78

console.log(mark >= 35 ? "Pass" : "Fail")


// Task 14 — Cab Booking Price

function calculateFare(baseFare, extraKm) {

    return baseFare + extraKm

}

console.log(calculateFare(100, 50))


// Task 15 — Instagram Hashtag Generator

let tag = "web developer"

let hashtag = tag.replaceAll(" ", "_")

console.log(hashtag)


// Task 16 — Netflix Kids Content

let kidsMovies = [
    { name: "A", age: 13 },
    { name: "B", age: 18 },
    { name: "C", age: 10 }
]

let filteredMovies = kidsMovies.filter(movie => movie.age < 18)

filteredMovies.forEach(movie => {
    console.log(movie.name)
})


// Task 17 — E-commerce Product Search

let product = "iphone"

console.log(product.startsWith("i"))


// Task 18 — WhatsApp Group Names

let groups = ["office", "friends", "family"]

groups.forEach((group, index) => {
    console.log(index + 1, group)
})


// Task 19 — Salary Highest Finder

let salary = [20000, 50000, 70000, 10000]

let highestSalary = salary.reduce((highest, current) => {

    return highest > current ? highest : current

})

console.log(highestSalary)


// Task 20 — Password Security Checker

let password = "navi@123"

if (password.includes("@") && password.length >= 8) {
    console.log("Strong Password")
} else {
    console.log("Weak Password")
}