// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
//angular fire imports
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth'; 
export const environment = {
 production: false,
 firebase: {
  apiKey: "AIzaSyBS3xRKD9VTK9KEKUax1o3PXYgQ-0E7SKc",
  authDomain: "angular-auth-app-e6882.firebaseapp.com",
  databaseURL: "https://angular-auth-app-e6882.firebaseio.com",
  projectId: "angular-auth-app-e6882",
  storageBucket: "angular-auth-app-e6882.appspot.com",
  messagingSenderId: "785069272475"
 }
};

