import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    CheckboxModule
  ],
  declarations: [
    CadastroComponent
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
