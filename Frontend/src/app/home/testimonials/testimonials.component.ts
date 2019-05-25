import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ServerService } from '../../server.service';
import { Response } from '@angular/http';
import { delay } from 'rxjs/operators';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials: { position: string, full_name: string, image: string, description: string }[];
  componentRef: any;

  @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private serverService: ServerService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.componentRef = this.loaderService.createComponent(this.entry);
    this.serverService.getTestimonials()
      .pipe(delay(500))
      .subscribe(
        (response: Response) => {
          this.loaderService.destroyComponent(this.componentRef);
          const data = response.json();
          this.testimonials = data.testimonials;
        },
        (error) => console.log(error)
      );
  }

}
