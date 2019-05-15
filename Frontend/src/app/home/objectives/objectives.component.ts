import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
    selector: 'app-objectives',
    templateUrl: './objectives.component.html',
    styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit{

    yearCount: number;

    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.yearCount = this.serverService.getYearCount();
    }
}