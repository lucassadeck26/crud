import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../service/usuarios.service';


@Component({
  selector: 'app-usuario-delete-modal',
  templateUrl: './usuario-delete-modal.component.html',
  styleUrl: './usuario-delete-modal.component.scss'
})
export class UsuarioDeleteModalComponent {

  usuario: Usuario;
  
 
  constructor( private delecao: UsuariosService  , private dialogRef: MatDialogRef<UsuarioDeleteModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {

    if (!data) {
      throw new Error("Dados não fornecidos para o modal de exclusão");
    }
    this.usuario = data;
  }
  

  confirmarExclusao(id: number): void {
      this.delecao?.deletarUsuario(id).subscribe(
          ()=>{
            console.log("Usuário foi deletado com sucesso");
            this.dialogRef.close(true); 
            window.location.reload();
          },
          error =>{
            console.error("Erro ao deletar o usuário: ",error);
          }
       )
    
  }

  fecharModal(): void {
    this.dialogRef.close(false); // Fecha o modal sem deletar o usuário
  }



}
