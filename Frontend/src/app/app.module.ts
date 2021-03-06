import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { ObjectivesComponent } from './home/objectives/objectives.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { SkillsComponent } from './home/skills/skills.component';
import { MainComponent } from './home/skills/main/main.component';
import { OtherComponent } from './home/skills/other/other.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { PersonalComponent } from './home/projects/personal/personal.component';
import { ProfessionalComponent } from './home/projects/professional/professional.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServerService } from './server.service';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { GetInitialsPipe } from '../pipe/getinitials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ObjectivesComponent,
    WorkExperienceComponent,
    SkillsComponent,
    MainComponent,
    OtherComponent,
    ProjectsComponent,
    PersonalComponent,
    ProfessionalComponent,
    TestimonialsComponent,
    FooterComponent,
    HomeComponent,
    TimelineComponent,
    ContactComponent,
    LoaderComponent,
    GetInitialsPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServerService, LoaderService, GetInitialsPipe],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule { }