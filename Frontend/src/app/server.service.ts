import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  /**
   * Get the work experience data via http request
   */
  getWorkExperience() {
    return this.http.get( environment.apiURL + '/work-experience' );
  }

  /**
   * Get the work timeline data via http request
   */
  getworkTimeline() {
    return this.http.get( environment.apiURL + '/work-timeline' );
  }

  /**
   * Get the project data via http request
   */
  getProject() {
    return this.http.get( environment.apiURL + '/projects' );
  }

  /**
   * Get the main skill data via http request
   */
  getMainSkills() {
    return this.http.get( environment.apiURL + '/main-skills' );
  }

  /**
   * Get the other skill data via http request
   */
  getOtherSkills() {
    return this.http.get( environment.apiURL + '/other-skills' );
  }

  /**
   * Get the testimonial data via http request
   */
  getTestimonials() {
    return this.http.get( environment.apiURL + '/testimonials' );
  }

  /**
   * Get the number of years since I started working
   */
  getYearCount() {
    const startingYear = 2013;
    let currentYear = this.getCurrentYear();
    return currentYear - startingYear;
  }

  /**
   * Get the current Year
   */
  getCurrentYear() {
    let d = new Date();
    return d.getFullYear();
  }

}
