import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    public signIn(email: string, password: string): Promise<UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public signUp(email: string, password: string): Promise<UserCredential> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}
