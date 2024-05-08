import { Component,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrl: './teams-card.component.scss'
})
export class TeamsCardComponent {
  @Input() public full_name: string = '';
  @Input() public helyezes: string = '';
  @Input() public lose: number = 0;
  @Input() public win: number = 0;
  @Input() public best_player: string = '';
  

  constructor(public readonly activeModal: NgbActiveModal) {}

}
