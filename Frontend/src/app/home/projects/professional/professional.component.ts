import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  professionalProjects: {title: string, description: string, graphic: {type: string, data: string}, link: string, company: string}[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.professionalProjects = this.homeService.projects.professional;
  }

}
