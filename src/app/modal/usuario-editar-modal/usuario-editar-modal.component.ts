import { Component, Inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from '../../service/usuarios.service';



@Component({
  selector: 'app-usuario-editar-modal',
  templateUrl: './usuario-editar-modal.component.html',
  styleUrl: './usuario-editar-modal.component.scss'
})
export class UsuarioEditarModalComponent {

  usuarioForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UsuarioEditarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario },
    private fb: FormBuilder,
    private usuarioService: UsuariosService
  ) {
    this.usuarioForm = this.fb.group({
      nome: [data.usuario.nome, Validators.required],
      cargo: [data.usuario.cargo, Validators.required],
      email: [data.usuario.email, [Validators.required, Validators.email]],
      });
  }

  salvarEdicao(): void {
    const editedUsuario: Usuario = this.usuarioForm.value;
    editedUsuario.id = this.data.usuario.id; // Mantém o ID original do usuário
console.log(editedUsuario.id);

    // Chama o serviço para atualizar os dados do usuário
    this.usuarioService.atualizarUsuario(this.data.usuario.id, editedUsuario).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso:', response);
        this.dialogRef.close(true); 
        window.location.reload();
// Fecha o modal e indica que a edição foi confirmada
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
        this.dialogRef.close(false); // Fecha o modal sem confirmar a edição
      }
    );
  }

  fecharModal(): void {
    this.dialogRef.close(false); // Fecha o modal sem confirmar a edição
  }

}
