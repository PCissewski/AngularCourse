import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverCreated = false;
  serverName = ':DDD';
  serverNames = ['Test', 'Test2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverNames.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}