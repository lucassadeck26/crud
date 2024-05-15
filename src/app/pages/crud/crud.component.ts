import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from '../../service/usuarios.service';
import { Usuario } from '../../interfaces/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { UsuarioModalComponent } from '../../modal/usuario-modal/usuario-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDeleteModalComponent } from '../../modal/usuario-delete-modal/usuario-delete-modal.component';
import { UsuarioEditarModalComponent } from '../../modal/usuario-editar-modal/usuario-editar-modal.component';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})


export class CrudComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>();


  displayedColumns: string[] = ['id','username', 'email', 'cargo', 'view','edit','delete'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private dialog: MatDialog,private usuariosService: UsuariosService) { }





  ngOnInit(): void {
    this.carregarUsuarios();
  }

  
  carregarUsuarios(): void {
    // Verificar se há um token armazenado localmente
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Token de autenticação não encontrado.');
      return;
    }
  
    // Fazer a chamada para obter os usuários, incluindo o token nos cabeçalhos
    this.usuariosService.getAllUsuarios().subscribe(
      usuarios => {
        this.dataSource.data = usuarios;
        this.dataSource.paginator = this.paginator;
        console.log(usuarios);
        // Definir o paginator após atribuir os dados
      },
      error => {
        console.log('Erro ao carregar usuários:', error);
      }
    );
  }
  
  
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openModal(id: number): void {
    this.usuariosService.getUsuarioById(id).subscribe(
      usuario => {
        const dialogRef = this.dialog.open(UsuarioModalComponent, {
          width: '400px',
          data: usuario
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('O modal foi fechado corretamente');
        });
      },
      error => {
        console.log('Erro ao carregar usuário:', error);
      }
    );


  }

  deleteModal(id: number): void{

    const dialogRef = this.dialog.open(UsuarioDeleteModalComponent, {
      data: { id: id } // Passa o ID do usuário para o modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado');
    });
    


    
  }
  




  abrirModalEditarUsuario(id: number): void {
    // Primeiro, busque os dados do usuário do banco de dados usando o ID
    this.usuariosService.getUsuarioById(id).subscribe(

      
      (usuario: Usuario) => {

        console.log(usuario);
        
        // Quando os dados do usuário forem obtidos com sucesso, abra o modal de edição
        const dialogRef = this.dialog.open(UsuarioEditarModalComponent, {
          data: { usuario: usuario } // Passa o usuário a ser editado para o modal
        });
  
        // Assim como antes, insira o código para atualizar a exibição dos usuários após a edição, se necessário
        dialogRef.afterClosed().subscribe(result => {
          console.log('O modal de edição foi fechado');
        });
      },
      (error) => {
        console.error('Erro ao obter usuário:', error);
        // Trate o erro, se necessário
      }
    );
  }












}
