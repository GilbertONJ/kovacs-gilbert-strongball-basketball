import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'strongball-basketball';

  constructor(private authservice: AuthService){}

  toogle(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if(event === true){
      sidenav.close();
    }
  }

  logout() {
    
  }
}
