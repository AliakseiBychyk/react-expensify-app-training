console.log('desctructuring')

//
// Object destructuring
//

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}

const { name: firstName = 'Anonymous', age } = person


console.log(`${firstName} is ${age}.`)

const {city, temp: temperature } = person.location

if (city && temperature) console.log(`It's ${city} in ${temperature}`)


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName) // Penguin, Self-Published

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

//const [street, city1, state, zip] = address
const [, city1, state = 'New York'] = address

console.log(`You are ins ${city1} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [drink = 'Coffee (ice)', , mediumPrice] = item
console.log(`A medium ${drink} costs ${mediumPrice}`)