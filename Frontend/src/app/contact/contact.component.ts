import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.serverService.sendEmail(form.value)
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );

  }

}
