import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials: { position: string, full_name: string, image: string, description: string }[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getTestimonials()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.testimonials = data.testimonials;
        },
        (error) => console.log(error)
      );
  }

}
