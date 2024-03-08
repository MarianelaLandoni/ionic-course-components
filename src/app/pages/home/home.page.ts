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
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'beaker-outline', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'radio-button-off-outline', name: 'Buttons', redirectTo: '/buttons' },
    { icon: 'card-outline', name: 'Cards', redirectTo: '/cards' },
    { icon: 'checkmark-circle-outline', name: 'Checks', redirectTo: '/checks' },
    { icon: 'calendar-outline', name: 'Date time', redirectTo: '/date-time' },
    { icon: 'car-outline', name: 'Fabs', redirectTo: '/fabs' },
    { icon: 'grid-outline', name: 'Grid', redirectTo: '/grid' },
    { icon: 'infinite-outline', name: 'Infinite Scroll', redirectTo: '/infinite-scroll' },
  ];

  constructor() { }


}
