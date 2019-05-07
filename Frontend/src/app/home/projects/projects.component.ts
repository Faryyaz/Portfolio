import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const navElement = document.getElementsByClassName('nav-rounded-link-wrapper');
    const navContentElement = document.getElementsByClassName('nav-content');

    [].forEach.call(navElement, function(el) {
      el.addEventListener("click", function() {
        [].forEach.call(navElement, function(el) {
          el.classList.remove('active');
        });

        [].forEach.call(navContentElement, function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');
        document.getElementById(this.dataset.link).classList.add('active');
      });
    });
  }

}
