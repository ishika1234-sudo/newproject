import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients={};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.clients=this.getclients();
  }
  getclients(){
    return this.config.getconfig().clients;
}
}