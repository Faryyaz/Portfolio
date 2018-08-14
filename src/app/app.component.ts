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
        classes: 'fab fa-laravel'
    },
    {
        name: 'Angular',
        classes: 'fab fa-angular'
    },
    {
        name: 'Vuejs',
        classes: 'fab fa-vuejs'
    },
    {
        name: 'Javascript',
        classes: 'fab fa-js'
    },
    {
        name: 'HTML 5',
        classes: 'fab fa-html5'
    },
    {
        name: 'Sass',
        classes: 'fab fa-sass'
    },
    {
        name: 'Gulp',
        classes: 'fab fa-gulp'
    },
    {
        name: 'GIT',
        classes: 'fab fa-git'
    },
    {
        name: 'PHP',
        classes: 'fab fa-php'
    },
    {
        name: 'Wordpress',
        classes: 'fab fa-wordpress'
    },
    {
        name: 'CSS3',
        classes: 'fab fa-css3-alt'
    },
    
];


}
