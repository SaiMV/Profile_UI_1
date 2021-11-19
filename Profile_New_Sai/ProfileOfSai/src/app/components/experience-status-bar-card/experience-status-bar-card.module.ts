import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceStatusBarCard } from "./experience-status-bar-card.component";

@NgModule({
  declarations: [ExperienceStatusBarCard],
  imports: [CommonModule],
  exports: [ExperienceStatusBarCard],
})
export class NavBarModule {}
