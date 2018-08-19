import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
    @Input('workExp') workExperience: [{company: string, position: string, duration: string, description: string}];
}