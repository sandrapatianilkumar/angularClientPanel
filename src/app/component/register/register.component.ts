import { timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.email,this.password)
    .then((res) => {
      this._flashMessagesService.show('New user registered.',{
        cssClass: 'alert-succuss',
        timeout: 400
      });
      this.router.navigate(['/']);
    })
    .catch((err)=>{
      this._flashMessagesService.show(err.message, {
        cssClass:'alert-danger',
        timeout:400
      });
      this.router.navigate(['/register']);
    })
  }

}
