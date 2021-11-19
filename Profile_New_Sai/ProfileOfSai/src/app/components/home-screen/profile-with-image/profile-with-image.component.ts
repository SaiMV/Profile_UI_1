import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-with-image',
  templateUrl: './profile-with-image.component.html',
  styleUrls: ['./profile-with-image.component.css']
})
export class ProfileWithImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileCardDetais:any = {
    name:"Sai M V",
    aboutMeDescription:"As a developer and a lead I was mainly working with frontend technologies including Angular,Ionic Spring boot applcaiton developments",
    phone:["+918086046407","+918593939224"],
    whatAreYou:"FullStack Developer"
  }
}
