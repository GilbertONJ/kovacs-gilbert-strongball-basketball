import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatSort} from '@angular/material/sort';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';



@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatSort,
    MatSortModule,
  ]
})
export class TeamsModule { }
