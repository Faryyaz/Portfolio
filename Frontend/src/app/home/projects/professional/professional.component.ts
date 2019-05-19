import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  professionalProjects: {title: string, description: string, graphic: {type: string, data: string}, link: string, company: string}[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getProject()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.professionalProjects = data.projects.professional;
        },
        (error) => console.log(error)
      );
  }

}
