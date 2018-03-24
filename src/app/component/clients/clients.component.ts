import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;
  constructor(public clientService: ClientService) {  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      //this.getTotalOwed();
    });
  }
  getTotalOwed() {
    let total = 0;
    for (let i = 0, len = this.clients.length; len > 0; i++) {
      total +=this.clients[i] && this.clients[i].balance;
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }

}
