import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  close(){
    this.onCloseSidenav.emit(true);
  }
}
