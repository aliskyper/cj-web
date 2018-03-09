import { Injectable } from '@angular/core';
import { Jumbotron } from './jumbotron';
import { JUMBOTRONS } from './mock-jumbotrons';

@Injectable()
export class JumbotronService {

    getJumbotrons(): Promise<Jumbotron[]> {
        return  Promise.resolve(JUMBOTRONS);
    }

     getJumbotron (code: string): Promise<Jumbotron> {
        return this.getJumbotrons().then(jumbotrons => jumbotrons.find(jumbotron => jumbotron.code === code));
    }
}
