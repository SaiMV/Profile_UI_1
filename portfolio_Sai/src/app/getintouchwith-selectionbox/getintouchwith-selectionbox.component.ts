import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getintouchwith-selectionbox',
  templateUrl: './getintouchwith-selectionbox.component.html',
  styleUrls: ['./getintouchwith-selectionbox.component.scss']
})
export class GetintouchwithSelectionboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
    message: string;
}