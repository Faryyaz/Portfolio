import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  headers = new Headers({ 'Access-Control-Allow-Origin': '*' });

  constructor(private http: Http) { }

  /**
   * Get the work experience data via http request
   */
  getWorkExperience() {
    return this.http.get('http://localhost:122/api/work-experience', {headers: this.headers});
  }

  /**
   * Get the work timeline data via http request
   */
  getworkTimeline() {
    return this.http.get('http://localhost:122/api/work-timeline');
  }

  /**
   * Get the project data via http request
   */
  getProject() {
    return this.http.get('http://localhost:122/api/projects');
  }

  /**
   * Get the main skill data via http request
   */
  getMainSkills() {
    return this.http.get('http://localhost:122/api/main-skills');
  }

  /**
   * Get the other skill data via http request
   */
  getOtherSkills() {
    return this.http.get('http://localhost:122/api/other-skills');
  }

  /**
   * Get the testimonial data via http request
   */
  getTestimonials() {
    return this.http.get('http://localhost:122/api/testtimonials');
  }


}
