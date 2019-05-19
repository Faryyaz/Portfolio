import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from "../../server.service";
import { Response } from '@angular/http';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
    workExperience: {company: string, position: string, duration: string, description: string}[];

    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.serverService.getWorkExperience()
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    this.workExperience = data.workExperience;
                },
                (error) => console.log(error)
            );
    }

}