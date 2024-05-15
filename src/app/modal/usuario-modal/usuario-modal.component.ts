import { Component, Inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrl: './usuario-modal.component.scss'
})
export class UsuarioModalComponent {

  usuario: Usuario;
 

  constructor(private dialogRef: MatDialogRef<UsuarioModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.usuario = data;
   
  }
  fecharModal(){
    this.dialogRef.close();
  }



}
