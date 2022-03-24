import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  secret = 'bosh';
  isRevealed = true;
  onClickLog = [];
  counter = 0;

  ngOnInit(): void {
  }

  onClickRevealSecret(){
    this.isRevealed === false ? this.isRevealed = true : this.isRevealed = false;
    this.onClickLog.push(this.counter);
    this.counter++;
  }

  changeColor(){
    return (this.counter > 5);
  }

}
