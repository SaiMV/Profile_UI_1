import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-selection-box',
  templateUrl: './about-me-selection-box.component.html',
  styleUrls: ['./about-me-selection-box.component.scss']
})
export class AboutMeSelectionBoxComponent implements OnInit {

  roleOfMe: String = "";
  roleData1: String = "";
  roleData:any[] = [];
  skillData:any[] = [];

  constructor() {

  }

classList = "line-reveal show";
  ngOnInit() {

    this.roleOfMe = "The developer";
    this.roleData =  [
            "I am a website designer/developer based in Mars,Nasa. I specialise in HTML5,CSS3 and JavaScript. I create beautiful, usable, professional websites using best practice accessibility and the latest W3C web standards guidelines, resulting in semantic and seo friendly HTML5 and CSS3. All my websites are lovingly hand coded.\n" +
            "\n" +
            "For building websites my weapons of choice are Photoshop and Mock Tools. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita impedit non quasi iure eaque vitae in enim at quis! Dolor a natus alias quaerat aliquid eaque expedita suscipit quibusdam veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cupiditate nesciunt obcaecati laborum consequuntur recusandae, neque temporibus a. Est praesentium possimus incidunt nisi nesciunt animi similique odio hic ullam rem!\n" +
            "\n" +
            "Please do check out my Portfolio",

        "I am an independent contractor currently focusing on the field of frontend web development and JavaScript programming. My current goal is to obtain either remote or on-site employment as a frontend web application developer."
        ,"For over a decade I have designed and built portal sites and e-learning modules within the Fortune 500 " +
      "pharmaceutical sales space. I have experience with audio and video editing and optimization, UI/UX design, information design " +
      "and technical writing, and have created numerous animations and interactive instructional tools for national conferences and corporate communication. If I were a mixed drink, this would likely be my formulation:"]
    this.skillData = ["1 part techie", "1 part artist" , "2 parts communicator" , "A splash of humor with a twist"];


      // var lines = document.querySelectorAll('.line-reveal');
            setTimeout(function() {
                  this.classList='line-reveal';
            }, 2000);

            setTimeout(function() {
                this.classList='line-reveal show';
            }, 500);

  }

}
