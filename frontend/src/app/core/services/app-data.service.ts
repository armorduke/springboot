import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  getCities() {
    return this.http.get('/api/v1/cities').pipe(map(res => res.json()));
  }

  getUsers() {
    return this.http.get('/api/v1/users').pipe(map(res => res.json()));
  }
}