import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component ({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
    skills: { name: string, classes: string }[];

    constructor(private homeService: HomeService) {}

    ngOnInit() {
        this.skills = this.homeService.skills;
    }
}