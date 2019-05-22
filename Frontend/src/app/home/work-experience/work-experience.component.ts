import { 
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef
    
} from '@angular/core';
import { ServerService } from "../../server.service";
import { Response } from '@angular/http';
import { LoaderService } from '../../loader/loader.service';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
    workExperience: {company: string, position: string, duration: string, description: string}[];
    componentRef: any;
    
    @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private serverService: ServerService, private loaderService: LoaderService) {}

    ngOnInit() {
        this.componentRef = this.loaderService.createComponent(this.entry);
        this.serverService.getWorkExperience()
            .pipe(delay(500))
            .subscribe(
                (response: Response) => {
                    this.loaderService.destroyComponent(this.componentRef);
                    const data = response.json();
                    this.workExperience = data.workExperience;
                },
                (error) => console.log(error)
            );
    }

}