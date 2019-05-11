import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { ServerService } from '../../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  otherSkills: string [][];

  constructor(private homeService: HomeService, private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getOtherSkills()
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    this.otherSkills = data.others;
                },
                (error) => console.log(error)
            );
  }

}
