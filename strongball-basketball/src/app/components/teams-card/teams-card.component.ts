import { Component,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrl: './teams-card.component.scss'
})
export class TeamsCardComponent {
  @Input() public name: string = '';
  @Input() public intro: string = '';
  

  constructor(public readonly activeModal: NgbActiveModal) {}

}
