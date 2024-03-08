import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage {

  data: any[] = Array(20);


  onIonInfinite(event: Event) {
    setTimeout(() => {
      if (this.data.length > 50) {
        (event as InfiniteScrollCustomEvent).target.complete();
        (event as InfiniteScrollCustomEvent).target.disabled = true;
        return;
      }
      const newData = Array(20);
      this.data.push(...newData);
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 1500);
  }
}
