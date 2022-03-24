import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online {
            color: white;
    }`]
})
export class ServerComponent {
    serverId: number = 7;
    serverStatus: string = 'offilne';
    

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}