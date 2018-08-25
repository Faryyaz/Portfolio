import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { TimelineComponent } from "./timeline/timeline.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'contact', component: ContactComponent}
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}