import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';
import { delay } from 'rxjs/operators';
import { LoaderService } from '../../../loader/loader.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  otherSkills: string [][];
  componentRef: any;

  @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private serverService: ServerService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.componentRef = this.loaderService.createComponent(this.entry);
    this.serverService.getOtherSkills()
      .pipe(delay(500))
      .subscribe(
          (response: Response) => {
              this.loaderService.destroyComponent(this.componentRef);
              const data = response.json();
              this.otherSkills = data.others;
          },
          (error) => console.log(error)
      );
  }

}
