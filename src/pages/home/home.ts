import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth} from "angularfire2/auth";
import { LoginPage } from "../login/login"

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      this.toast.create({
        message : 'welcome to TheDrawRoom',
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message : 'Could not find details',
        duration: 3000
      }).present();
    }
    });

}
async logout() {
  try {
    const result = this.afAuth.auth.signOut();
    if(result){
      this.navCtrl.setRoot('LoginPage')
  }
  else {
    alert('Unable to sign user out.')
  }
  }
  catch (e) {
    console.error(e);
  }
}
}
