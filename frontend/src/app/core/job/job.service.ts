import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltroDTO } from '../models/filtroDTO';
import { UserService } from '../services/user.service';
import { JobDTO } from './job-dto';

const URL = '/api/v2/jobs';

@Injectable()
export class JobService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.accessToken
        })
    };

    constructor(
        private userService: UserService,
        private httpClient: HttpClient
    ) { }

    getAllJobs() {
        return this.httpClient.get(URL, this.httpOptions);
    }


    cadastrar(filtro: FiltroDTO) {
        return this.httpClient.post<JobDTO>(URL, filtro, this.httpOptions);
    }

}