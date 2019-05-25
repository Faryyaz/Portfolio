import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';
import { delay } from 'rxjs/operators';
import { LoaderService } from '../../../loader/loader.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  professionalProjects: {title: string, description: string, graphic: {type: string, data: string}, link: string, company: string}[];
  componentRef: any;

  @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private serverService: ServerService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.componentRef = this.loaderService.createComponent(this.entry);
    this.serverService.getProject()
      .pipe(delay(500))
      .subscribe(
        (response: Response) => {
          this.loaderService.destroyComponent(this.componentRef);
          const data = response.json();
          this.professionalProjects = data.projects.professional;
        },
        (error) => console.log(error)
      );
  }

}
