import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserFirestoreInterface } from '../../Interfaces/UserFirestoreIterface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CloudStoreService {
    private userCollectionName = 'Users';
    private userCollection: AngularFirestoreCollection<UserFirestoreInterface> = this.afs.collection(this.userCollectionName);

    constructor(private afs: AngularFirestore) { }

    public getUserAdditionalInfo$(uid: string): Observable<UserFirestoreInterface> {
        return  this.userCollection.doc<UserFirestoreInterface>(uid).valueChanges();
    }
}
