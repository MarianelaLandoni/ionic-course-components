import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage {

  favorite: boolean = false;

  constructor() { }

  clickFavorite() {
    this.favorite = !this.favorite;
  }
}
