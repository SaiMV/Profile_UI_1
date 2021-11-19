import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/nav-bar/navbar.component';
import { FlashScreenModule } from './pages/flash-screen/flash-screen.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
