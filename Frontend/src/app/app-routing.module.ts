import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ContactComponent } from "./contact/contact.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'contact', component: ContactComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}