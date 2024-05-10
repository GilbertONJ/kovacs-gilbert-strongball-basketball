import { Component } from '@angular/core';
import { TeamObject } from '../../shared/team-data/teams'
import { TeamsCardComponent } from '../../components/teams-card/teams-card.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoryObject } from '../../shared/team-data/story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  teamObject = TeamObject;
  selectedTeam: string = '';
  fullName: string = '';
  story: string = '';

  constructor(private readonly modalService: NgbModal){}

  getTeam(selected: string){
    this.selectedTeam = selected;
    console.log(this.selectedTeam);
    const modalRef = this.modalService.open(TeamsCardComponent);
    this.check();
    modalRef.componentInstance.name = this.fullName;
    modalRef.componentInstance.intro = this.story;
    
  }

  check(){
    switch(this.selectedTeam){
      case 'bear':
        this.fullName = 'The Bears';
        this.story = StoryObject.bear;
        break;
      case 'eagle':
        this.fullName = 'The Eagles';
        this.story = StoryObject.eagle;
        break;
      case 'hawk':
        this.fullName = 'The Hawks';
        this.story = StoryObject.hawk;
        break;
      case 'lion':
        this.fullName = 'The Lions';
        this.story = StoryObject.lion;
        break;
      case 'griffin':
        this.fullName = 'The Griffins';
        this.story = StoryObject.griffin;
        break;
      case 'elephant':
        this.fullName = 'The Elephants';
        this.story = StoryObject.elephant;
        break;
      case 'shark':
        this.fullName = 'The Sharks';
        this.story = StoryObject.shark;
        break;
      case 'fox':
        this.fullName = 'The Foxes';
        this.story = StoryObject.fox;
        break;
    }
  }
}
