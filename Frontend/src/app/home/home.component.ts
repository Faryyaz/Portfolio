import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.getElementById(f);
      const body = document.getElementsByClassName('route-container');
      if (element) {
        setTimeout(() => {
          let offset = element.offsetTop - element.scrollTop - 120; // xx = any extra distance from top ex. 60
          window.scrollBy({top: offset, left: 0, behavior: 'smooth'});
        }, 100);
      }
    });
  }

}
