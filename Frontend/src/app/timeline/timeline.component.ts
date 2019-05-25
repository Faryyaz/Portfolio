import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
import { delay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  workTimeLine: { position: string, company: string, startingYear: string, period: { from: string, to: string }, description: string }[];
  componentRef: any;

  @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private serverService: ServerService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.componentRef = this.loaderService.createComponent(this.entry);
    this.serverService.getworkTimeline()
      .pipe(delay(500))
      .subscribe(
        (response: Response) => {
          this.loaderService.destroyComponent(this.componentRef);
          const data = response.json();
          this.workTimeLine = data.workTimeLine.reverse();
        },
        (error) => console.log(error)
      );
  }

}
