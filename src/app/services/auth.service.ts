import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData), err=>reject(err));
    });
  }

}
