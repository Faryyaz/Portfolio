import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  otherSkills: string [][];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.otherSkills = this.homeService.otherSkills;
  }

}
