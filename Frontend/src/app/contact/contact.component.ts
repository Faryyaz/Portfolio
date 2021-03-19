import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loading: boolean;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
      this.loading = false;
   }

  onSubmit(form) {
    this.loading = true;
    this.serverService.sendEmail(form.value)
      .subscribe(
        (response: Response) => {
            const statusText = response.statusText;
            const data = response.json();
            if (statusText === 'OK') {
                this.loading = false;
                alert(data.message);
            }
        },
        (error) => {
            const errorData = error.json();
            this.loading = false;
            if (errorData.errors.hasOwnProperty('email')) {
                alert('The email must be a valid email address.');
            }
        }
      );

  }

}
