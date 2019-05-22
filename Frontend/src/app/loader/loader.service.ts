import { 
    Injectable,
    ComponentFactoryResolver 
} from "@angular/core";
import { LoaderComponent } from './loader.component';

@Injectable()
export class LoaderService {
    

    
    constructor(private resolver: ComponentFactoryResolver) { }

    createComponent(entryElem: any) {
        const factory = this.resolver.resolveComponentFactory(LoaderComponent);
        return entryElem.createComponent(factory);
    }

    destroyComponent(componentRef: any) {
        componentRef.destroy();
    }

    
}