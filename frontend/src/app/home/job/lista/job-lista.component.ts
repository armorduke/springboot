import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/core/job/job';
import { Task } from 'src/app/core/task/task';

@Component({
    selector: 'job-lista-component',
    templateUrl: 'job-lista.component.html'
})

export class JobListaComponent implements OnInit {

    @Input() jobs: Job[] = [];
    tasks: Task[] = [];
    display: boolean = false;

    constructor() { }

    ngOnInit() { }

    exibirTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.display = true;
    }

}