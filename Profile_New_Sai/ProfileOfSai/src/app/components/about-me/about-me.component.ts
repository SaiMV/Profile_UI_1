import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMEComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  aboutMe: any = {
    roleOfMe: 'The developer',
    roleData: [
      "'I'm Sai, I am from India. I'm a designer, developer, life long learner, and ready for new opportunities and currently a permanent employee in Wipro Technologies." ,
      "I started working in Wipro on 2012 as part of work integrated course provided by the company after my graduation Bsc Computer Science. I,m Currently working as a Full Stack Engineer and fell in love with creative UI designing. I work in the field of Web designing, Cross platform and Hybrid application development for 6.5 years and have been front-end developer for 4.5 years. I'm a self taught developer and my current focus is on learning the ins and outs of becoming a Full Stack developer.",
      "I'm also an android/iOS app developer have experience in Xamarnin cross platform development, android native development and Ionic Native development. As a developer I participated in agile methodologies: Scrum , products idealizations, test implementations, code reviews, refactoring, publishing processes, among others. I believe in user centered design and delivering the best possible experiences to people.",
        "A bit about me. I love music, the arts, tech and all things creative. But for now I'm just focussed on creating a decent portfolio.",
    ],
    skillData: [
      "HTML", "CSS", "Bootstrap", "Flexbox", "Javascript", "jQuery", "Angular", "JavaScript",
        "JavaScript libraries and frameworks", "IONIC framework", "GIT", "TortoiseSVN", "Responsive Web Design", "Cross Platform", "Cross-browser",
         "Java", "C#" , "Objective C", "Xamarin and Android Studio"
    ],
  };
}
