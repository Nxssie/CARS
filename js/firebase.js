export let loadFirebase = () => {
  console.log("Hi Firebase.");

  var firebaseConfig = {
    apiKey: "AIzaSyClOYue6gRZEqGj1ixRljqenSxl09N69JE",
    authDomain: "cars-37463.firebaseapp.com",
    databaseURL: "https://cars-37463.firebaseio.com",
    projectId: "cars-37463",
    storageBucket: "cars-37463.appspot.com",
    messagingSenderId: "705604932479",
    appId: "1:705604932479:web:23984254fa46802631804a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}