import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/src/angular-font-awesome.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],exports:[NavbarComponent]
})
export class NavBarModuleModule { }
