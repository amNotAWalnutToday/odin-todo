const config = {
    apiKey: "AIzaSyAa5T1SqsmnVFSCuBPCC1joIz-ZHymGrtU",
    authDomain: "todo-a2542.firebaseapp.com",
    projectId: "todo-a2542",
    storageBucket: "todo-a2542.appspot.com",
    messagingSenderId: "658485121299",
    appId: "1:658485121299:web:7869008650d2d10e710ae6"
}

export default function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
}