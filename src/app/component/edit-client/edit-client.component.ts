import { timeout } from 'rxjs/operators';
import {Client} from './../../models/Client';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import {ClientService} from './../../services/client.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnEdit = true;
  constructor(
    public flashMessagesService : FlashMessagesService,
    public clientService : ClientService,
    public router : Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    //get id
    this.id = this.route.snapshot.params['id'];
    //get client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  onSubmit({value, valid}: {
    value: Client,
    valid: boolean
  }) {
    if (!valid) {
      this
        .flashMessagesService
        .show('Please fill all the mandatory fields', {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      this
        .router
        .navigate(['edit-client/' + this.id]);
    } else {
      this.clientService.updateClient(this.id, value);
      this
        .flashMessagesService
        .show('Client updated', {
          cssClass: 'alert-success',
          timeout: 4000
        });
      this
        .router
        .navigate(['/client/' + this.id]);
    }
  }

}
