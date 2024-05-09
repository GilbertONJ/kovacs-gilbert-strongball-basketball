import { Component } from '@angular/core';
import { TeamObject } from '../../shared/team-data/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teamobject = TeamObject;
}
