import { Component } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})

export class AlertComponent{
    username = "Steve+";
    resetUsername: boolean = false;

    isUsernameEmpty(){
        if (this.username == "") return true;
    }

    onUpdateUsername(event: Event){
        this.username = (<HTMLInputElement>event.target).value;
    }

    onResetName(){
        this.username = "";
    }

}