import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/guards/auth-guard.service';
import { CadastroComponent } from './job/cadastro/cadastro.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
    {path: 'cadastro/:id', component: CadastroComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }