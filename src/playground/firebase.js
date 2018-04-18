import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDwycKyvv4r8cVat7qqZ_n5jumF1gw5MNw",
    authDomain: "expensify-4c70f.firebaseapp.com",
    databaseURL: "https://expensify-4c70f.firebaseio.com",
    projectId: "expensify-4c70f",
    storageBucket: "expensify-4c70f.appspot.com",
    messagingSenderId: "59468568349"
};

firebase.initializeApp(config);

const database = firebase.database();

console.log('I made a request');

// child removed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// const expenses = [{
//     description: 'Gym', 
//     notes: 'Gym membership', 
//     amount: 15000, 
//     createdAt: 1000
// }, {
//     description: 'Rent', 
//     notes: 'Rent', 
//     amount: 550000, 
//     createdAt: 1500
// }, {
//     description: 'Car', 
//     notes: 'Car payments', 
//     amount: 450000, 
//     createdAt: 2000
// }]; 

// database.ref('expenses').push({
//     description: expenses[0].description, 
//     notes: expenses[0].notes, 
//     amount: expenses[0].amount, 
//     createdAt: expenses[0].createdAt, 
// });

// database.ref('expenses').push({
//     description: expenses[1].description, 
//     notes: expenses[1].notes, 
//     amount: expenses[1].amount, 
//     createdAt: expenses[1].createdAt, 
// });

// database.ref('expenses').push({
//     description: expenses[2].description, 
//     notes: expenses[2].notes, 
//     amount: expenses[2].amount, 
//     createdAt: expenses[2].createdAt, 
// });

// database.ref('expenses') 
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key, 
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log(e);
//     });


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key, 
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(snapshot.val());
//     });


// database.ref('notes/-LAHzNWOs0bd1oc6RbGT')
//     .update({
//         body: 'test'
//     });


// database.ref('notes').push({
//     title: 'Course Topics', 
//     body: 'React Native, angular, Python'
// });


// database.ref('notes').set(notes);

// database.ref().set({
//     name: "Justin Somerville", 
//     age: 43,
//     stressLevel: 6,
//     job: { 
//         title: 'Software Developer',
//         company: 'Google'
//     }, 
//     location: {
//         city: 'Pretoria', 
//         country: 'South Africa'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((error) => {
//     console.log('This failed: ', error);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed.');
//     })
//     .catch((error) => {
//         console.log(error);
// });


// database.ref()
//     .update({
//         'stressLevel': 9, 
//         'job/company': 'Amazon', 
//         'location/city': 'Boston', 
//         'location/country': 'United States'
//     });


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e) => {
//         console.log(e);
//     });


// setTimeout(() => {
//     database.ref('age').set(50);
// }, 3500);



// setTimeout(() => {
//     database.ref()
//         .off(onValueChange);
// }, 7000);



// setTimeout(() => {
//     database.ref('age').set(52);
// }, 10500);


// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
//     }, (e) => {
//         console.log(e);
//     });