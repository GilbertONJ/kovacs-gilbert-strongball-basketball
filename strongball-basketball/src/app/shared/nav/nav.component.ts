import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter(); 
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() currentUser?: firebase.default.User | null;


  close(logout?: boolean){
    this.onCloseSidenav.emit(true);
    if(logout === true){
      this.onLogout.emit(logout);
    }
  }
}
