import { Component } from '@angular/core';

@Component({
  selector: 'app-fabs',
  templateUrl: './fabs.page.html',
  styleUrls: ['./fabs.page.scss'],
})
export class FabsPage {

  data = Array(100);

  pressDocument() {
    console.log('Press Document');
  }

  goToPage() {
    console.log('Go to page');
  }

}
