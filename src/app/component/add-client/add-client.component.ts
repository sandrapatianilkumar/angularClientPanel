import { ClientService } from './../../services/client.service';
import {Component, OnInit} from '@angular/core';
import {Client} from '../../models/Client';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {timeout} from 'rxjs/operators';

@Component({selector: 'app-add-client', templateUrl: './add-client.component.html', styleUrls: ['./add-client.component.scss']})
export class AddClientComponent implements OnInit {

  client : Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd = false;

  constructor(public flashMessagesService : FlashMessagesService, public router : Router, public clientService: ClientService) {}

  ngOnInit() {}

  onSubmit({value, valid} : {
    value: Client,
    valid: boolean
  }) {
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if (!valid) {
      this
        .flashMessagesService
        .show('Please fill all the mandatory fields', {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      this
        .router
        .navigate(['add-client']);
    } else {
      this.clientService.newClient(value);
      this
        .flashMessagesService
        .show('New client added', {
          cssClass: 'alert-success',
          timeout: 4000
        });
      this
        .router
        .navigate(['/']);
    }
  }

}
