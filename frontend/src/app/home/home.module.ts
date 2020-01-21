import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { JobService } from '../core/job/job.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JobListaModule } from './job/lista/job-lista.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './job/cadastro/cadastro.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ToastModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    TableModule,
    MatToolbarModule,
    JobListaModule,
    CheckboxModule,
    DropdownModule,
    FieldsetModule
  ],
  declarations: [
    HomeComponent,
    CadastroComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HttpClient,
    JobService
  ]
})
export class HomeModule { }
