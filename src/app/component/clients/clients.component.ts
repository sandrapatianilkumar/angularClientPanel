import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'; 
import {Client} from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients:Client[];
  constructor(public clientService: ClientService) {
    
   }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
    });
  }

}
