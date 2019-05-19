import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { Response } from '@angular/http';

@Component ({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
    mainSkills: { title: string, classes: string }[];

    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.serverService.getMainSkills()
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    this.mainSkills = data.skills;
                },
                (error) => console.log(error)
            );
    }
}