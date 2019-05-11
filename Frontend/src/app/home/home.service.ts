export class HomeService {
    mainSkills = [
        {
            title: 'Laravel',
            classes: 'fab fa-laravel'
        },
        {
            title: 'Angular',
            classes: 'fab fa-angular'
        },
        {
            title: 'Vuejs',
            classes: 'fab fa-vuejs'
        },
        {
            title: 'Javascript',
            classes: 'fab fa-js'
        },
        {
            title: 'HTML 5',
            classes: 'fab fa-html5'
        },
        {
            title: 'Sass',
            classes: 'fab fa-sass'
        },
        {
            title: 'Gulp',
            classes: 'fab fa-gulp'
        },
        {
            title: 'GIT',
            classes: 'fab fa-git'
        },
        {
            title: 'PHP',
            classes: 'fab fa-php'
        },
        {
            title: 'Wordpress',
            classes: 'fab fa-wordpress'
        },
        {
            title: 'CSS3',
            classes: 'fab fa-css3-alt'
        },
        {
            title: 'MySQL',
            classes: 'fas fa-database'
        },
        
    ];
    
    otherSkills = [
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

    projects = {
        professional: [
            {
                title: 'Alchemetrix - Dashboard',
                description: 'With supporting text below as a natural lead-in to additional content.',
                graphic: {type: 'icon', data: 'fas fa-tachometer-alt'},
                link: '',
                company: 'Emtel Ltd'
            },
            {
                title: 'Alchemetrix - GIS',
                description: 'With supporting text below as a natural lead-in to additional content.',
                graphic: {type: 'icon', data: 'fas fa-map'},
                link: '',
                company: 'Emtel Ltd'
            }
        ],
        personal: [
            {
                title: '',
                description: '',
                graphic: {type: 'image', data: './...'},
                link: '',
                company: 'Personal | Part time'
            }
        ]
    };


}