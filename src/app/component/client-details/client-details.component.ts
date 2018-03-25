import { timeout } from 'rxjs/operators';
import {Client} from './../../models/Client';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import {ClientService} from './../../services/client.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-details', 
  templateUrl: './client-details.component.html', 
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  id : string;
  client : Client;
  hasBalance : boolean = false;
  showBalanceUpdateInput : boolean = false;
  constructor(
    public flashMessagesService : FlashMessagesService, 
    public clientService : ClientService, 
    public router : Router, 
    public route : ActivatedRoute
  ) {}

  ngOnInit() {
    //get id
    this.id = this.route.snapshot.params['id'];
    //get client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0) {
        this.hasBalance = true;
      }
      this.client = client;
    });
  }

  updateBalance(id:string) {
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', {cssClass:'alert-succuss',timeout:4000});
    this.router.navigate(['/client/'+this.id]);
  }

}
