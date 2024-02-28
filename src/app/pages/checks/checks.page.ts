import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage {

  constructor() { }

  checks = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  onClick(check: any) {
    console.log(check);
  }
}
