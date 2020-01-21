import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { JobListaComponent } from './job-lista.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        DialogModule
    ],
    exports: [JobListaComponent],
    declarations: [JobListaComponent],
    providers: []})
export class JobListaModule { }
