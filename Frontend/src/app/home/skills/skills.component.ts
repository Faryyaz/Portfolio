import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ServerService } from '../../server.service';

@Component ({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
    mainSkills: { title: string, classes: string }[];

    constructor(private homeService: HomeService, private serverService: ServerService) {}

    ngOnInit() {
        // this.mainSkills = this.homeService.mainSkills;
    }
}