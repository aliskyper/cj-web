import { Component} from '@angular/core';
import { JumbotronService} from './jumbotron.service';

@Component({
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent {
    constructor(private jumbotronService: JumbotronService) {}
}
