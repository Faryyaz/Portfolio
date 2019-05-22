import { 
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory
} from '@angular/core';
import { ServerService } from "../../server.service";
import { Response } from '@angular/http';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
    workExperience: {company: string, position: string, duration: string, description: string}[];
    componentRef: any;

    @ViewChild('appLoaderComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private serverService: ServerService, private resolver: ComponentFactoryResolver) {}


    createComponent() {
        const factory = this.resolver.resolveComponentFactory(LoaderComponent);
        this.componentRef = this.entry.createComponent(factory);
    }

    destroyComponent() {
        this.componentRef.destroy();
    }

    ngOnInit() {
        this.createComponent();
        this.serverService.getWorkExperience()
            .subscribe(
                (response: Response) => {
                    const data = response.json();
                    this.workExperience = data.workExperience;
                    this.destroyComponent();
                },
                (error) => console.log(error)
            );
    }

}