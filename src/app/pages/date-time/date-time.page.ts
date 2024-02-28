import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage {

  showCalendar = false;
  showWheelpicker = false;

  constructor() { }

  openCalendar() {
    this.showCalendar = true;
  }

  closeCalendar() {
    this.showCalendar = false;
  }

  openWheelpicker() {
    this.showWheelpicker = true;
  }

  closeWheelpicker() {
    this.showWheelpicker = false;
  }

}
