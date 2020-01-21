import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Job } from 'src/app/core/job/job';
import { JobService } from 'src/app/core/job/job.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Task } from 'src/app/core/task/task';
import { MessageService } from 'primeng/components/common/messageservice';
import { stringify } from 'querystring';
import { JobDTO } from 'src/app/core/job/job-dto';
import { FiltroDTO } from 'src/app/core/models/filtroDTO';
import { Router, ActivatedRouteSnapshot, Route, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;
  formTask: FormGroup;
  jobs: SelectItem[];
  tasks: Task[] = [];

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      'name': new FormControl(''),
      'ativo': new FormControl(''),
      'selectedJob': new FormControl('')
    });
    this.formTask = this.fb.group({
      'name': new FormControl('', Validators.required),
      'weight': new FormControl(''),
      'completed': new FormControl(false)
    });
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.carregarJobs();
  }

  carregarJobs() {
    this.jobs = [];
    this.jobs.push({
      label: 'Selecionar Job',
      value: null
    });
    this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
      jobs.forEach((job: Job) => {
        this.jobs.push({
          label: job.name,
          value: job
        });
      });
    });
  }

  adicionarTask() {
    if (!this.formTask.get('name').value) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'O nome da task deve ser informado!' });
      return false;
    }
    this.tasks.push(this.criarTask());
    this.formTask.reset();
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Task adicionada com sucesso!' });
  }

  private criarTask() {
    let task = new Task();
    task.name = this.formTask.get('name').value;
    task.weight = this.formTask.get('weight').value;
    task.completed = this.formTask.get('completed').value;
    task.createdAt = new Date();
    return task;
  }

  cadastrar() {
    if(!this.validarCadastro()){
      return false;
    }
    let jobDTO: JobDTO = this.criarJobDTO();
    let filtro: FiltroDTO = new FiltroDTO();
    filtro.jobDTO.push(jobDTO)
    this.jobService.cadastrar(filtro).subscribe((retorno) => {
      console.log(retorno);
      this.formCadastro.reset();
      this.router.navigate(['/home'], { queryParams: { id: retorno.id } })
    }, (error) => {
      console.log(error.message);
    });
  }

  validarCadastro() {
    if (!this.formCadastro.get('name').value) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'O nome do job deve ser informado!' });
      return false;
    }
    let found = this.jobs.filter((job: SelectItem) => {
      return job.label.toString().toLowerCase().trim() === this.formCadastro.get('name').value.toString().toLowerCase().trim();
    });
    if (found.length > 0) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'O Job já existe!' });
      return false;
    }
    return true;
  }

  private criarJobDTO() {
    let jobDTO: JobDTO = new JobDTO();
    jobDTO.name = this.formCadastro.get('name').value;
    jobDTO.active = this.formCadastro.get('ativo').value;
    jobDTO.parentJob = this.formCadastro.get('selectedJob').value ? this.formCadastro.get('selectedJob').value.id : null;
    this.tasks.forEach((task: Task) => {
      task.createdAt = null;
    });
    jobDTO.tasks = this.tasks;
    return jobDTO;
  }
}
