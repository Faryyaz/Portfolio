import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.currentYear = this.serverService.getCurrentYear();
  }

}
