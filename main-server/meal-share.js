import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase configuration (API 키 포함)
const firebaseConfig = {
    apiKey: "AIzaSyDUhOh6uIZS7OsdA3x4ae7JSW8Qq77A3cY",
    authDomain: "meal-share-58b6d.firebaseapp.com",
    projectId: "meal-share-58b6d",
    storageBucket: "meal-share-58b6d.appspot.com",
    messagingSenderId: "140795254159",
    appId: "1:140795254159:web:d75dcc340df0f55e78e7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example function to add data
async function addMeal() {
    const mealData = {
        date: new Date().toISOString().split('T')[0],
        foodName: document.getElementById("foodName").value,
        calories: document.getElementById("calories").value
    };
    try {
        const docRef = await addDoc(collection(db, "users", "user123", "meals"), mealData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Example function to get data
async function getMeals() {
    const querySnapshot = await getDocs(collection(db, "users", "user123", "meals"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
    });
}

window.addMeal = async function() {
const mealData = {
    date: new Date().toISOString().split('T')[0],
    foodName: document.getElementById("foodName").value,
    calories: document.getElementById("calories").value
};
try {
    const docRef = await addDoc(collection(db, "users", "user123", "meals"), mealData);
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
};

window.getMeals = async function() {
const querySnapshot = await getDocs(collection(db, "users", "user123", "meals"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
});
};