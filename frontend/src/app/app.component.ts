import { Component, OnInit } from '@angular/core';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  title = 'prova';

  constructor() {
  }

  ngOnInit(){
  }

}
