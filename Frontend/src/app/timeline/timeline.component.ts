import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  workTimeLine: { position: string, company: string, startingYear: string, period: { from: string, to: string }, description: string }[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getworkTimeline()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.workTimeLine = data.workTimeLine.reverse();
        },
        (error) => console.log(error)
      );
  }

}
