import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
    workExperience: {company: string, position: string, duration: string, description: string}[];

    constructor(private homeService: HomeService) {}

    ngOnInit() {
        this.workExperience = this.homeService.workExperience;
    }

}