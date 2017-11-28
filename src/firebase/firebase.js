import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, db as default }

// // child_removed
// db.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// db.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// db.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// const onValueChange = db.ref('expenses').on('value', snapshot => {
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// }, e => {
//   console.log('Error with fetching', e)
// })


// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })


// Setup expanses with three items (description, note, amount, createdAt)

// db.ref('expenses').push({
//   'description': 'Water bill',
//   'note': 'Water bill for september 2017',
//   'amount': 2000,
//   'createdAt': '10/15/2017'
// })


// db.ref('notes/-Kx8HQ2Dqunsdokox4U2').update({
//   body: 'Buy food'
// })

// db.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// })


// const firebaseNotes = {
//   notes: {
//     firstNote: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     secondNote: {
//       title: 'Second note!',
//       body: 'This is a next note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '76',
//   title: 'Second note!',
//   body: 'This is a next note'
//   }]

// db.ref('notes').set(firebaseNotes)



// const onValueChange = db.ref().on('value', snapshot => {
//   const { name, job }  = snapshot.val()
//   const { title, company } = job
//   console.log(`${name} is a ${title} at ${company}`)
// }, e => {
//   console.log('Error with data fetching', e)
// })


// const onValueChange = db.ref().on('value', snapshot => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   db.ref('age').set(45)
// }, 3500)

// setTimeout(() => {
//   db.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   db.ref('age').set(44)
// }, 10500)

// db.ref() // db.ref('location')   db.ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch(e => {
//     console.log('Error fetching data', e)
//   })


// db.ref().set({
//   name: 'Aleks Bychyk',
//   age: 44,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Epam'
//   },
//   location: {
//     city: 'Brest',
//     country: 'Belarus'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch(err => {
//   console.log('this failed', err)
// })

// db.ref().update({
//   name: 'Aleks Byczyk',
//   job: 'Software developer',
//   age: null,    // deletes age field
//   // location: {
//   //   city: 'Boston'  // nested object don't updates but replaces
//   // }
//   'location/city': 'Boston' // will update only city
// })

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })


// db.ref().set('this is my data')

// db.ref('age').set(45)

// db.ref('location/city').set('Brest BY')

// db.ref('attributes/height').set(180)
// db.ref('attributes/weight').set(100)

// db.ref('attributes').set({
//   height: 180,
//   weight: 100
// }).then(()=>{
//   console.log('data is saved')
// }).catch(err => {
//   console.log(err)
// })



// console.log('I made a request to save the data')

// db.ref('age')  // db.ref() will remove entire db
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch(e => {
//     console.log('Did not remove data', e)
//   })

// db.ref('age').set(null)   // the same as remove
