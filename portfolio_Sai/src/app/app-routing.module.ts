import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstlookSelectionBoxComponent} from './firstlook-selection-box/firstlook-selection-box.component';
import {AboutMeSelectionBoxComponent} from './about-me-selection-box/about-me-selection-box.component';
import {SkillsetSelectionBoxComponent} from './skillset-selection-box/skillset-selection-box.component';
import {ProjectSelectionBoxComponent} from './project-selection-box/project-selection-box.component';
import {GetintouchwithSelectionboxComponent} from './getintouchwith-selectionbox/getintouchwith-selectionbox.component';
import {PersonalDetailsSelectionBoxComponent} from './personal-details-selection-box/personal-details-selection-box.component';
import {EducationalDetailsSelectionBoxComponent} from './educational-details-selection-box/educational-details-selection-box.component';

const routes: Routes = [{ path: '',
  redirectTo: '/firstLook',
  pathMatch: 'full'
},
  {
  path: 'firstLook', component: FirstlookSelectionBoxComponent
},
{
  path: 'aboutMe', component: AboutMeSelectionBoxComponent
},
{
  path: 'mySkills', component: SkillsetSelectionBoxComponent
},
{
  path: 'myProjects', component: ProjectSelectionBoxComponent
},
{
  path: 'getInTouchwith', component: GetintouchwithSelectionboxComponent
},
  {
  path: 'personalDetails', component: PersonalDetailsSelectionBoxComponent
},
  {
  path: 'educationalDetails', component: EducationalDetailsSelectionBoxComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
