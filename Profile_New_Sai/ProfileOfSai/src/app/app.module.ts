import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrfileDetailsComponent } from './components/prfile-details/prfile-details.component';
import { ProjectDetailsCardsComponent } from './components/project-details-cards/project-details-cards.component';
import { ImageSliderComponentComponent } from './components/image-slider-component/image-slider-component.component';
import { HorizondalLineComponentComponent } from './components/horizondal-line-component/horizondal-line-component.component';
import { CompanyExperienceDetailsComponentComponent } from './components/company-experience-details-component/company-experience-details-component.component';
import { TextAnimationComponent } from './components/text-animation/text-animation.component';
import { FlashScreenModule } from './components/flash-screen/flash-screen.module';
import { IntroScreenComponent } from './components/intro-screen/intro-screen.component';
import { BackroundAnimationComponent } from './components/backround-animation/backround-animation.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DetailsTabComponent } from './components/home-screen/details-tab/details-tab.component';
import { ProfileWithImageComponent } from './components/home-screen/profile-with-image/profile-with-image.component';
import { AboutMEComponent } from './components/about-me/about-me.component';
import { EducationalDetailsComponent } from './components/educational-details/educational-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SkillSetDetailsComponent } from './components/skill-set-details/skill-set-details.component';
import { SkillSetProgressSelectorComponent } from './components/skill-set-details/skill-set-progress-selector/skill-set-progress-selector.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PrfileDetailsComponent,
    ProjectDetailsCardsComponent,
    ImageSliderComponentComponent,
    HorizondalLineComponentComponent,
    CompanyExperienceDetailsComponentComponent,
    TextAnimationComponent,
    IntroScreenComponent,
    BackroundAnimationComponent,
    HomeScreenComponent,
    DetailsTabComponent,
    ProfileWithImageComponent,
    AboutMEComponent,
    EducationalDetailsComponent,
    PersonalDetailsComponent,
    SkillSetDetailsComponent,
    SkillSetProgressSelectorComponent,
    NavbarComponent,
    VideoPlayerComponent
    // EducationalDetailsSelectionBoxComponent,
    // ExperienceSelectionBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
