import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { ObjectivesComponent } from './home/objectives/objectives.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { SkillsComponent } from './home/skills/skills.component';
import { SkillComponent } from './home/skills/skill/skill.component';
import { OtherComponent } from './home/skills/other/other.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { PersonalComponent } from './home/projects/personal/personal.component';
import { ProfessionalComponent } from './home/projects/professional/professional.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ObjectivesComponent,
    WorkExperienceComponent,
    SkillsComponent,
    SkillComponent,
    OtherComponent,
    ProjectsComponent,
    PersonalComponent,
    ProfessionalComponent,
    TestimonialsComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
