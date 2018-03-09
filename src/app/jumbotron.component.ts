import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { JumbotronService } from './jumbotron.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Jumbotron} from './jumbotron';

@Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.css']
})

export class JumbotronComponent implements OnInit {
    constructor(
        private jumbotronService: JumbotronService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    jumbotron: Jumbotron;


    ngOnInit(): void {
        this.jumbotronService.getJumbotron(this.route.routeConfig.path).then(jumbotron => this.jumbotron = jumbotron);
    }
}

