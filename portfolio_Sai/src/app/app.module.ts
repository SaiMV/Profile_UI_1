import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectSelectionBoxComponent } from './project-selection-box/project-selection-box.component';
import { AboutMeSelectionBoxComponent } from './about-me-selection-box/about-me-selection-box.component';
import { FirstlookSelectionBoxComponent } from './firstlook-selection-box/firstlook-selection-box.component';
import { EducationalDetailsSelectionBoxComponent } from './educational-details-selection-box/educational-details-selection-box.component';
import { PersonalDetailsSelectionBoxComponent } from './personal-details-selection-box/personal-details-selection-box.component';
import { SkillsetSelectionBoxComponent } from './skillset-selection-box/skillset-selection-box.component';
import { ExperienceSelectionBoxComponent } from './experience-selection-box/experience-selection-box.component';
import { SliderMenuIndicatorComponent } from './slider-menu-indicator/slider-menu-indicator.component';
import { GetintouchwithSelectionboxComponent } from './getintouchwith-selectionbox/getintouchwith-selectionbox.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSelectionBoxComponent,
    AboutMeSelectionBoxComponent,
    FirstlookSelectionBoxComponent,
    EducationalDetailsSelectionBoxComponent,
    PersonalDetailsSelectionBoxComponent,
    SkillsetSelectionBoxComponent,
    ExperienceSelectionBoxComponent,
    SliderMenuIndicatorComponent,
    GetintouchwithSelectionboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
