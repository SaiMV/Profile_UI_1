import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  educationDetails: any = {
    header: 'My Career',
    role:"Senior Software Engineer",
    company:"Wipro Technologies PvtLTD",
    mainDiscription:"Experience in web applications and cross platform application development using HTML 5, Javascript, CSS, Ionic 2, Angular JS and Angular 2 frameworks.",
    roleData: [
      "Experience in Software components design Creating HLD and LLD using EA (Enterprise Architect) tool." ,
      "Expertise in Developing and Debugging of Application in ADT like Intellij, Android Studio and Eclipse",
      "Expertise in using SCM tools and worked on SVN.",
      "Expertise in Developing and Debugging of Application in ADT like Intellij, Android Studio and Eclipse.",
      "Experience in Design and Development on the Diabetes featuring android application project running on customized OS and Hardware with Core Java.",
      "iOS Application development using Objective C and Xamarin C#.",
      "Worked on developing cross platform applications for surgical medical devices in iOS and Windows using Xamarin and Xcode IDEs.",
      "Agile software development experience using SCRUM.",
      "Design and setup of build automation, NUnit, JUnit testing environments and data storage for mobile and mobile web apps.",
     ],
    skillData: [
    ],
  };
}
