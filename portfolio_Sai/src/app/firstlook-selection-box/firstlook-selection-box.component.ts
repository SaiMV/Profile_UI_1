import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firstlook-selection-box',
  templateUrl: './firstlook-selection-box.component.html',
  styleUrls: ['./firstlook-selection-box.component.scss']
})
export class FirstlookSelectionBoxComponent implements OnInit {
  heasdrer1: String = "";
  subHeader:String = "";
    afterSomeTime2 = false;
    afterSomeTime1 = false;
    afterSomeTime3 = false;
    afterSomeTime4 = false;
  constructor(public http : HttpClient) { }
  currentClassName:String='';
  ngOnInit() {
    this.heasdrer1 = "I'm Sai, a front end web developer";
    this.subHeader="Full Stack - Apps - Web";
      setTimeout(callBack =>   {
          this.afterSomeTime1 = true;
      }, 601);
      setTimeout(callBack =>   {
          this.afterSomeTime1 = false;
          this.afterSomeTime2 = true;
      }, 5001);
      setTimeout(callBack =>   {
          this.afterSomeTime2 = false;
          this.afterSomeTime3 = true;
      }, 8000);
  }
// {responseType: "blob", headers: {'Accept': 'application/pdf'}}/
    downloadResume() {
        this.http.get('../../assets/resume/sai-mv-resume.pdf', {responseType: "blob", headers: {'Accept': 'application/pdf'}})
        // this.http.get('https://reshmasarageorge-1e107.firebaseapp.com/firstLook', null)
            .subscribe(blob => {
                saveAs(blob, 'sai-mv-resume.pdf');
            });
    }
}
