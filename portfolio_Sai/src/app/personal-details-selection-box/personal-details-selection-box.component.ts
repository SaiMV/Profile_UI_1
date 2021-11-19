import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details-selection-box',
  templateUrl: './personal-details-selection-box.component.html',
  styleUrls: ['./personal-details-selection-box.component.scss']
})
export class PersonalDetailsSelectionBoxComponent implements OnInit {

  constructor() { }
  educationDatas:any[] = [];
  educaationalData:any[] = [];

  ngOnInit() {
    this.educaationalData = ["I obtained my Bachelors of Science in Information Technology (with Cum Laude honors) in 2001. Prior to obtaining my degree, I invested many years in course work pursuant of a career in the alternative medical field."];

    this.educationDatas = ["Completed B.E-EEE in Arasu Engineering College, Kumbakonam with 7.8 CGPA (2015).",
      "Secured 75% marks in HSC at Raj.Matric.Hr.Sec School, Mayiladuthurai (2011)." ,
      "Secured 71% marks in SSLC at Raj.Matric.Hr.Sec School, Mayiladuthurai on (2009)."];

  }

}
