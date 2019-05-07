import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalProjects: {title: string, description: string, graphic: {type: string, data: string}, link: string, company: string}[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.personalProjects = this.homeService.projects.personal;
  }

}
