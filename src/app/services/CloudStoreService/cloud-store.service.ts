import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserFirestoreInterface } from '../../Interfaces/user-firestore-interface';
import { Observable } from 'rxjs';

@Injectable()
export class CloudStoreService {
    public userCollectionName = 'Users';
    public userCollection: AngularFirestoreCollection<UserFirestoreInterface> = this.afs.collection(this.userCollectionName);

    constructor(private afs: AngularFirestore) { }

    public getUserAdditionalInfo$(uid: string): Observable<UserFirestoreInterface> {
        return this.userCollection.doc<UserFirestoreInterface>(uid).valueChanges();
    }
}
