import { Component } from '@angular/core';
import { routeAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'Portfolio';

  getDepth(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
