import { Component } from '@angular/core';

@Component ({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
    // skills = ['test', 'test 1'];
}