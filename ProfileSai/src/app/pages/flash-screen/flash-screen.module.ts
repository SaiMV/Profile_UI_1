import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashScreenComponent } from './flash-screen.component';

@NgModule({
  declarations: [FlashScreenComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FlashScreenComponent
  ]
})
export class FlashScreenModule { }
