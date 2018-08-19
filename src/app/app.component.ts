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
    {
        name: 'MySQL',
        classes: 'fas fa-database'
    },
    
];

others = [
    [
        'C# programming (.Net)',
        'Basic Python programming',
        'Basic Java programming'
    ],
    [
        'Time Management',
        '2D/3D Modelling & animation',
        'French & English communication skills'
    ],
    [
        'Server Management',
        'Fast learner',
        'Team player'
    ]
];

workExperience = [
    {
        company: 'Emtel Ltd',
        position: 'PM Administrator/Developer',
        duration: 'Feb 2013 - Apr 2015',
        description: 'Development of automated software (e.g. Dashboards, ETL process, etc...)'
    },
    {
        company: 'Stella Telecom Ltd',
        position: 'Web Engineer ',
        duration: 'May 2015 - Apr 2018',
        description: 'Development of web projects using web technologies/frameworks'
    },
    {
        company: 'Orange Business Services',
        position: 'Senior Software Engineer',
        duration: 'May 2018 - Present',
        description: 'Customisation and application development within ServiceNow'
    }

];


}
