import { Component } from '@angular/core';
import { TeamObject } from '../../shared/team-data/teams'
import { TeamsCardComponent } from '../../components/teams-card/teams-card.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  teamObject = TeamObject;
  selectedTeam: string = '';

  constructor(private readonly modalService: NgbModal){}

  getTeam(selected: string){
    this.selectedTeam = selected;
    const modalRef = this.modalService.open(TeamsCardComponent);
  }
}
