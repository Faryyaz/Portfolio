import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { OtherComponent } from './skills/other/other.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './projects/personal/personal.component';
import { ProfessionalComponent } from './projects/professional/professional.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    ObjectivesComponent,
    WorkExperienceComponent,
    SkillsComponent,
    SkillComponent,
    OtherComponent,
    ProjectsComponent,
    PersonalComponent,
    ProfessionalComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
