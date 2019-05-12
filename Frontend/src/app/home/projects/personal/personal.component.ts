import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalProjects: {title: string, description: string, graphic: {type: string, data: string}, link: string, company: string}[];

  constructor(private homeService: HomeService, private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getProject()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.personalProjects = data.projects.personal;
        },
        (error) => console.log(error)
      );
  }

}
