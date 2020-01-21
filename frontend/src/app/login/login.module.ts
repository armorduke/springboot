import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from '../core/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    UserService,
    MessageService
  ]
})
export class LoginModule { }
