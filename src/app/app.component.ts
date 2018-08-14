import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  skills = [
    {
        name: 'Laravel',
        class: 'fab fa-laravel'
    },
    {
        name: 'Laravel',
        class: 'fab fa-laravel'
    },
    {
        name: 'Laravel',
        class: 'fab fa-laravel'
    }
];


}
