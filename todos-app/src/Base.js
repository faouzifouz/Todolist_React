import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';

 const app = firebase.initializeApp ( {
    apiKey: "AIzaSyDe9c86XTg6RYNXSWm4JnwAUah6DcgRFZ0",
    authDomain: "todolist-1a7b7.firebaseapp.com",
    databaseURL: "https://todolist-1a7b7.firebaseio.com",
    projectId: "todolist-1a7b7",
    storageBucket: "todolist-1a7b7.appspot.com",
    messagingSenderId: "950+568427769",
});


export default app;

// export default{
//     apiKey: "AIzaSyDe9c86XTg6RYNXSWm4JnwAUah6DcgRFZ0",
//     authDomain: "todolist-1a7b7.firebaseapp.com",
//     databaseURL: "https://todolist-1a7b7.firebaseio.com",
//     projectId: "todolist-1a7b7",
//     storageBucket: "todolist-1a7b7.appspot.com",
//     messagingSenderId: "950568427769",
//     appId: "1:950568427769:web:d25c02ac185b2ed8"
// }