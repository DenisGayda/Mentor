import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(public afAuth: AngularFireAuth) { }

    signIn(email: string, password: string): Promise<UserCredential> {
        return  this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp(email: string, password: string): Promise<UserCredential> {
        return  this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}
