import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';
import { AuthServiceService as authGuard } from './service/auth-service.service';


const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent, canActivate: [authGuard] },
{ path: 'crud', component: CrudComponent, canActivate: [authGuard] },
{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
