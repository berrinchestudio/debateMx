// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb16oV9q0_fHv1scXb9z09wD-xXmY6IDE",
  authDomain: "debatefileupload.firebaseapp.com",
  projectId: "debatefileupload",
  storageBucket: "debatefileupload.appspot.com",
  messagingSenderId: "225065260008",
  appId: "1:225065260008:web:e5bbd59693e670c27d8a5d",
};

firebase.initializeApp(firebaseConfig);

// select BUTTOM
var btn = document.getElementById("fileInputImg");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInputImg").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`profile/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValueImg").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`ID/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput2");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput2").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`parentID/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue2").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput3");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput3").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`parentAuth/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue3").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput4");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput2").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput4").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`ID/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue4").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput5");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput2").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput5").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`parentID/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue5").value = value;
      });
      // RETURN A PROMISE
    }
  );
});

// select BUTTOM
var btn = document.getElementById("fileInput6");
// ADD CLICK LISTENER TO THE BUTTON WE SELECTED
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput2").value;
  // GET FILE FROM THE  FILE INPUT
  var file = document.getElementById("fileInput6").files[0];
  // MAKE A REFERNCE TO FIREBASE .
  var storageRef = firebase.storage().ref();
  // MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
  var final = storageRef.child(`parentAuth/${userEmail}/${file}`);
  // THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
  var task = final.put(file);

  task.on(
    "state_changed",
    // PROGRESS FUNCTION
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue6").value = value;
      });
    }
  );
});
var btn = document.getElementById("fileInput7");
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput3").value;
  var file = document.getElementById("fileInput7").files[0];
  var storageRef = firebase.storage().ref();
  var final = storageRef.child(`ID/${userEmail}/${file}`);
  var task = final.put(file);

  task.on(
    "state_changed",
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue7").value = value;
      });
    }
  );
});
var btn = document.getElementById("fileInput8");
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput3").value;
  var file = document.getElementById("fileInput8").files[0];
  var storageRef = firebase.storage().ref();
  var final = storageRef.child(`parentID/${userEmail}/${file}`);
  var task = final.put(file);

  task.on(
    "state_changed",
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue8").value = value;
      });
    }
  );
});
var btn = document.getElementById("fileInput9");
btn.addEventListener("change", (e) => {
  var userEmail = document.getElementById("mailInput3").value;
  var file = document.getElementById("fileInput9").files[0];
  var storageRef = firebase.storage().ref();
  var final = storageRef.child(`parentAuth/${userEmail}/${file}`);
  var task = final.put(file);

  task.on(
    "state_changed",
    function progress(progress) {
      console.log((progress.bytesTransferred / progress.totalBytes) * 100);
    },
    function error(err) {
      console.log("There was An Err " + err);
    },
    function completed() {
      var promiseURL = final.getDownloadURL();

      var url = Promise.resolve(promiseURL);
      url.then((value) => {
        document.getElementById("urlLinkValue9").value = value;
      });
    }
  );
});
