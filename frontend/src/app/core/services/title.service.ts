import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TitleService {

    title: string = '';

    constructor() {
     }

     configuraTitulo(titulo: string) {
        this.title = titulo;
     }

}