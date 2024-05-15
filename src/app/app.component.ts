import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud';

 

  clicouH2(){
    console.log("Clicou no h2");
    
  }




  clicou(){
    console.log("Clicou ");
    
  }


  cliqueDuplo(){
    console.log("duplo clique");
    
  }

  mouseSaiu(){
    console.log("Mouse saiu");
    
  }


  mouseEntrou(){
    console.log("Mouse Entrou");
    
  }


  focou(){
    console.log("Focou");
    
  }


  saiu(){
    console.log("Saiu");
    
  }

  digitouDown( targetInput: any){
      
    console.log("Digitou Down,",targetInput.value);
    
    
  }

  
  digitouUp( targetInput: any){
      
    console.log("Digitou Up,",targetInput.value);
    
    
  }
  
  apertouA(){
    console.log("Apertou A");
    
  }

  apertouS(){
    console.log("Usuário digitou s");
    
  }


scrollou(){
    console.log("Houve Scroll");
    
  }

 
 


}
