import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../core/job/job';
import { JobService } from '../core/job/job.service';
import { TitleService } from '../core/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Job[];
  formJob: FormGroup;

  constructor(
    private titleService: TitleService,
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.titleService.configuraTitulo('Jobs');
    this.formJob = this.fb.group({
      'name': new FormControl(''),
      'active': new FormControl(''),
      'parentJob': new FormControl('')
    });
    this.jobService.getAllJobs().subscribe((retorno: Job[]) => {
      console.log(retorno);
      this.jobs = retorno;
    });
  }

  cadastrar(){
    console.log('cadastrar');
    this.router.navigate(['cadastro']);
  }

}
