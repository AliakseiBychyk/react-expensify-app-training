import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDaRws_Z6PLcjm1GdqL2_KAKBSLK-123cs",
  authDomain: "react-expensify-app-training.firebaseapp.com",
  databaseURL: "https://react-expensify-app-training.firebaseio.com",
  projectId: "react-expensify-app-training",
  storageBucket: "react-expensify-app-training.appspot.com",
  messagingSenderId: "248802735561"
}

firebase.initializeApp(config)

const db = firebase.database()

db.ref().set({
  name: 'Aleks Bychyk',
  age: 44,
  location: {
    city: 'Brest',
    country: 'Belarus'
  }
})

// db.ref().set('this is my data')

db.ref('age').set(45)

db.ref('location/city').set('Brest BY')

db.ref('attributes/height').set(180)
db.ref('attributes/weight').set(100)