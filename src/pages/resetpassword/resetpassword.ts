import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth} from "angularfire2/auth";
import { LoginPage } from "../login/login"
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async resetpass(user: User) {
    try {
      const result = this.afAuth.auth.sendPasswordResetEmail(user.email)
      if(result){
        alert("Password reset link has been sent to your email :" && user.email);
        this.navCtrl.setRoot('LoginPage')
    }
    else {
      alert("Error: Please check email entered is correct.")
    }
    }
    catch (e) {
      console.error(e);
    }
  }

}
