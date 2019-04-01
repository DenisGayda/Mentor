import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})

export class AuthService {

    constructor(public afAuth: AngularFireAuth) { }

    signIn(email, password) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
    signOut(){
        this.afAuth.auth.signOut();
  }
}
