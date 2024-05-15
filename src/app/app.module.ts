import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatIconModule,} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CrudComponent } from './pages/crud/crud.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientXsrfModule } from '@angular/common/http';
import { UsuarioModalComponent } from './modal/usuario-modal/usuario-modal.component';
import { UsuarioDeleteModalComponent } from './modal/usuario-delete-modal/usuario-delete-modal.component';
import { UsuarioEditarModalComponent } from './modal/usuario-editar-modal/usuario-editar-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CrudComponent,
    UsuarioModalComponent,
    UsuarioDeleteModalComponent,
    UsuarioEditarModalComponent,
  
    
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN', // O nome do cookie CSRF
      headerName: 'X-XSRF-TOKEN', // O nome do cabeçalho CSRF
    }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
