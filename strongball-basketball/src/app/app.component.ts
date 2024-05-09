import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'strongball-basketball';
  currentUser?: firebase.default.User | null;

  
  
  constructor(private authservice: AuthService){}
  
  ngOnInit(){
    this.authservice.isLoggedIn().subscribe(user => {
      this.currentUser = user;
    }, error => {

    });
  }

  toogle(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if(event === true){
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authservice.logout().then( () => {

    }).catch(error => {

    });
  }

}
