import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  signIn(email: string, password: string){
     return  this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
  signUp(email: string,password: string){
      return  this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  }
}
