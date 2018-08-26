import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    name = "FD";
    isDropDownActive = false;
    isHomeActive = false;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.router.events.subscribe(
            (event: Event) => {
                if (event instanceof NavigationEnd) {
                    let url = this.router.url.replace(/#.+/g, '');
                    if (url === '/') {
                        this.isHomeActive = true;
                    } else {
                        this.isHomeActive = false;
                        this.isDropDownActive = false;
                    }
                }
            }
        );
    }

    openDropDownMenu() {
        this.isDropDownActive = !this.isDropDownActive;
    }


}