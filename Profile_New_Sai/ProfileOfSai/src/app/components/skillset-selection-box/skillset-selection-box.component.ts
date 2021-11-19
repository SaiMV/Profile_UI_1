import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset-selection-box',
  templateUrl: './skillset-selection-box.component.html',
  styleUrls: ['./skillset-selection-box.component.scss']
})
export class SkillsetSelectionBoxComponent implements OnInit {

  constructor() { }
    skills: any = [
      {skillName:"HTML5", percentage:"70%"},
      {skillName:"CSS3", percentage:"70%"},
      {skillName:"Bootstrap", percentage:"70%"},
      {skillName:"Javascript", percentage:"70%"},
      {skillName:"Jquery", percentage:"50%"},
      {skillName:"Agnular 2", percentage:"80%"},
      {skillName:"Agnular 4", percentage:"50%"},
      {skillName:"Ionic 3", percentage:"70%"},
      {skillName:".net C#", percentage:"80%"},
      {skillName:"SQL", percentage:"80%"},
    ];
  ngOnInit() {
  }

}
