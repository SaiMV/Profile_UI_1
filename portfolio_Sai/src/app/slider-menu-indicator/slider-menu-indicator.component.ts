import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slider-menu-indicator',
  templateUrl: './slider-menu-indicator.component.html',
  styleUrls: ['./slider-menu-indicator.component.scss']
})
export class SliderMenuIndicatorComponent implements OnInit {

  constructor(public router: Router) {

  }

  starterViewIndex = 0;
  slides: any[] =  [];

  ngOnInit() {
 this.slides = ['firstLook' , 'aboutMe' , 'personalDetails', 'mySkills' , 'myProjects' , 'getInTouchwith' , 'educationalDetails'];
  }
    menuClicked:boolean = false;
    toggleClass(){
        this.menuClicked = !this.menuClicked;
    }
  gotoView(sliders, index) {
    this.starterViewIndex = index;
    this.router.navigate([sliders]);
  }
  gotoNextView() {
    this.starterViewIndex = this.starterViewIndex + 1;
    if ( this.starterViewIndex > (this.slides.length - 1)) {
      this.starterViewIndex = 0;
    }
    this.router.navigate([this.slides[this.starterViewIndex]]);
    // this.router.ac
  }

  gotoPreviousView() {

    this.starterViewIndex = this.starterViewIndex - 1;
    if ( this.starterViewIndex < 0) {
      this.starterViewIndex = this.slides.length - 1;
    }
    this.router.navigate([this.slides[this.starterViewIndex]]);
    // this.router.ac
  }
getInTouchWith() {
    this.router.navigate(['getInTouchwith' ]);
// this.toggleClass();
}

    gotoMyProjects() {
        this.router.navigate(['myProjects' ]);
        // this.toggleClass();

    }
    gotoFirstLook() {
        this.router.navigate(['firstLook' ]);
        // this.toggleClass();

    }
    gotoPersonalDetails() {
        this.router.navigate(['personalDetails' ]);
        // this.toggleClass();

    }
    gotoAboutMe() {
        this.router.navigate(['aboutMe' ]);
        // this.toggleClass();

    }
    gotoProfessionalDetails() {
        this.router.navigate(['mySkills' ]);
        // this.toggleClass();

    }
    gotoSkillsAndTechnologies() {
        this.router.navigate(['educationalDetails' ]);
        // this.toggleClass();

    }

}
