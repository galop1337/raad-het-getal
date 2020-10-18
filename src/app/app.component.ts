import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';  
  randomNumber: number =Math.floor(Math.random()*100);
  aantalBeurten = 10;
  verschil;  
  

  checkGok(value){
    this.verschil = this.randomNumber - value;
    this.aantalBeurten = this.aantalBeurten -1; 
    if (this.verschil === 0)
    {
      this.aantalBeurten = 0
    }
         
  }
  refresh(){
    window.location.reload();
  }
}
