import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      subHeader: 'Subheader',
      cssClass: 'my-custom-class', //clase personalizada, si queremos varias clases separamos por espacio
      // backdropDismiss: true, //si es true se cierra al hacer click fuera del action sheet - por defecto es true
      //translucent: true, //si es true el fondo del action sheet es transparente - por defecto es false, solo se aplica en ios y el dispositivo admite backdrop-filter
      //ver más propiedades en la documentacion oficial: https://ionicframework.com/docs/api/action-sheet

      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          cssClass: 'trash-red',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ],
    });

    await actionSheet.present();
  }

}
