import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-selection-box',
  templateUrl: './project-selection-box.component.html',
  styleUrls: ['./project-selection-box.component.scss']
})
export class ProjectSelectionBoxComponent implements OnInit {
    menuClicked: Boolean = false;
    hideProjectDetails: Boolean = false;
  constructor() {
      this.toggleProjectDetails();
  }

  ngOnInit() {
  }

    toggleClass(){
          this.menuClicked = !this.menuClicked;
    }
    toggleProjectDetails(){
      console.log(this.hideProjectDetails);
        this.hideProjectDetails = !this.hideProjectDetails;
    }
}
