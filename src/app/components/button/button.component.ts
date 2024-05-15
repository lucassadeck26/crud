import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

    @Input() textButton: string = 'LOGIN';
    @Input() size: string = 'auto';


    constructor(){
      
    }
    

    clicou(){
      console.log("clicou no botão");
    }


}
