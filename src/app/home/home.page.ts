import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
    }

    signOut() {
        this.afAuth.auth.signOut().then(() => {
            location.reload();
        });
    }

    private firebaseAuthChangeListener(response) {
        if (response) {
            console.log('Logged in :)');
        } else {
            console.log('Logged out :(');
        }
    }


}
