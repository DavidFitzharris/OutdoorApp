import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/users.services';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // bound vars
  distance: number = 0;
  height: number = 0;
  weight: number;
  ground: number;
  pace: number;
  // other
  finalPace: number;
  weightDif: number;
  groundDif: number;
  paceDif: number;
  timeN: number;
  restTime: number;
  finalTime: number;
  resultMessage: number;

  constructor(public alertController: AlertController, private userService: UserService) {}

  naiCalc() {
    // The following takes into account the different variables inputted and adds
    // or takes away minutes per km traveled getting the final av pace and using
    // this to calculate total time, with the addition on 1 min per 10 meters climbed
    // and after 1 hour, adds 10 mins per hour travelled

    // Taking in the variables
    if (this.weight == 1) {
      this.weightDif = 3;
    } else if (this.weight == 2) {
      this.weightDif = 0;
    }

    if (this.ground == 1) {
      this.groundDif = 0;
    } else if (this.ground == 2) {
      this.groundDif = -2;
    } else if (this.ground == 3) {
      this.groundDif = 3;
    }

    if (this.pace == 1) {
      this.paceDif = 4;
    } else if (this.pace == 2) {
      this.paceDif = 0;
    } else if (this.pace == 3) {
      this.paceDif = -3;
    }

    // calculating the time
    this.finalPace = 15 + this.weightDif + this.paceDif + this.groundDif;
    this.timeN = this.finalPace * (this.distance / 1000) + (this.height / 10);
    // checking for the break time to be added
    if (this.timeN > 60) {
      this.restTime = 10 * (this.timeN / 60);
      this.finalTime = this.timeN + this.restTime;
    } else {
      this.finalTime = this.timeN;
    }
    this.showAlert();
    console.log(this.finalPace + " " + this.finalPace);
  }

  // display the final result
  showAlert() {
    this.alertController
      .create({
        header: 'Est Time: ' + this.finalTime.toFixed() + ' minutes',
        subHeader: 'Est pace: ' + this.finalPace + 'mins per Km',
        message:
          'Note additional time for height climbed and 10 mins resting time per hour travelled is included',
        buttons: ['OK'],
      })
      .then(res => {
        res.present();
      });
  }
}