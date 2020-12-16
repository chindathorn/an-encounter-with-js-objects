// Eight useful array methods
// * cleansing up code
// * do complex login in such small amount of code

const items = [
    { name: 'Bike', price: 100 },
    { name: 'Cars', price: 200 },
    { name: 'Moto', price: 300 },
    { name: 'Airplan', price: 600 },
    { name: 'Ship', price: 900 },
]

const filterItems = items.filter(item => {
    return item.price <= 500
})

console.log(items)
console.log(filterItems)


const itemNames = items.map(item => {
    return item.name
})

console.log(itemNames)


const foundItem = items.find(item => {
    return item.name === 'Airplan'
})

console.log(foundItem)


// same to for loop
items.forEach(item => {
    console.log(item.name)
})


// check any things in the array and return true or false (if nothing in the array return true)
const hasInexpensiveItems = items.some(item => {
    return item.price <= 300
})

console.log(hasInexpensiveItems)


// check every single item
const hasExpensiveItems = item.every(item => {
    return item.price <= 1000
})

console.log(hasExpensiveItems)


// cumulatively by doing some operation successive additions
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0) // start index

console.log(totalPrice)


const items = [1, 2, 3, 4, 5]

// check an simple array
const includesTwo = items.includes(8)

console.log(includesTwo)