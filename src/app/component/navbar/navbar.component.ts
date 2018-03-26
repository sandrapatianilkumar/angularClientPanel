import {timeout} from 'rxjs/operators';
import {AuthService} from './../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({selector: 'app-navbar', templateUrl: './navbar.component.html', styleUrls: ['./navbar.component.scss']})
export class NavbarComponent implements OnInit {

  isLogggedIn : boolean;
  loggedInUser : string;
  showRegister : boolean;

  constructor(private authService : AuthService, private router : Router, private flashMessagesService : FlashMessagesService) {}

  ngOnInit() {
    this
      .authService
      .getAuth()
      .subscribe(auth => {
        if (auth) {
          this.isLogggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLogggedIn = false;
        }
      })
  }

  onLogoutClick() {
    this
      .authService
      .logout();
    this
      .flashMessagesService
      .show('You are logged out', {
        cssClass: 'alert-succuss',
        timeout: 4000
      });
      this.router.navigate(['/login']);
  }

}
