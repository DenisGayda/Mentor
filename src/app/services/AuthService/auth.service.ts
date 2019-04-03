import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CloudStoreService } from '../CloudStoreService/cloud-store.service';
import { UserFirestoreInterface } from '../../Interfaces/user-firestore-interface';

import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {
    constructor(private afAuth: AngularFireAuth,
                private cloudStoreService: CloudStoreService) { }

    public signIn(email: string, password: string): Promise<UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public signUp(email: string, password: string, infoObject): void {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.createUserAdditionalInfo(user.user.uid, infoObject);
            });
    }

    private createUserAdditionalInfo(uid: string, info: UserFirestoreInterface): void {
        this.cloudStoreService.userCollection.doc(uid).set(info);
    }
}
