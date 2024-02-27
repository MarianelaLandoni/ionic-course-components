import { Component } from '@angular/core';

interface ListComponent {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  components: ListComponent[] = [
    { icon: 'american-football-outline', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'logo-apple-appstore', name: 'Alert', redirectTo: '/alert' },
  ];

  constructor() { }


}
