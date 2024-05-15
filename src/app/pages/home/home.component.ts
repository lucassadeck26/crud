import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit  {

    userName: string | null;

    constructor(private usuarioService : UsuariosService){

    }

    ngOnInit(){
      console.log(localStorage.getItem('token'))

    this.userName = sessionStorage.getItem('usuario');

    this.usuarioService.getAllUsuarios().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Erro ao obter dados da API:', error);
      }
    );

    }


}
