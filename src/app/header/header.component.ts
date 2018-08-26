import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    name = "FD";
    isDropDownActive = false;
    isHomeActive = false;

    constructor(private router: Router){}

    ngOnInit() {
        this.router.events.subscribe(
            (event: Event) => {
                if(event instanceof NavigationEnd) {
                    if(this.router.url === '/') {
                        this.isHomeActive = true;
                    } else {
                        this.isHomeActive = false;
                    }
                }
            }
        );
    }

    openDropDownMenu() {
        this.isDropDownActive = !this.isDropDownActive;
    }


}