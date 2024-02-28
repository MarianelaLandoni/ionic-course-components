import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  constructor(private alertController: AlertController) { }

  //simple alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Simple Alert',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  //alert with multiple buttons
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert multiple buttons',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ],
    });

    await alert.present();
  }


  /**
   * Despite we can use alert with input, it is not recommended to use it (better use modals) because
   * radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example,
   * an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs.
   * Do note however, different types of "text" inputs can be mixed, such as url, email, text, textarea etc.
   */


  //alert with input
  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'Alert with inputs',
      subHeader: 'Sub Header Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log('data form:', data);
          },
        },
      ],
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

  //alert with radio
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Alert with radios',
      subHeader: 'Sub Header Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log('data form:', data);
          },
        },
      ],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ]
    });

    await alert.present();
  }

  //alert with checkbox
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Alert with checkboxes',
      subHeader: 'Sub Header Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log('data form:', data);
          },
        },
      ],
      inputs: [
        {
          name: 'red',
          type: 'checkbox',
          label: 'Red',
          value: 'red'
        },
        {
          name: 'blue',
          type: 'checkbox',
          label: 'Blue',
          value: 'blue'
        },
        {
          name: 'green',
          type: 'checkbox',
          label: 'Green',
          value: 'green'
        }
      ]
    });

    await alert.present();
  }






}
