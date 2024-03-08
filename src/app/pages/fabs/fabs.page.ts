import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabs',
  templateUrl: './fabs.page.html',
  styleUrls: ['./fabs.page.scss'],
})
export class FabsPage {

  data = Array(100);

  constructor(private router: Router) { }

  goToCardsPage() {
    this.router.navigate(['/cards']);
  }

  goToPage() {
    console.log('Go to page');
  }

}
