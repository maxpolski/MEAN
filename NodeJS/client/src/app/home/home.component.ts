import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {IPhoto} from '../shared/photo.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private photos: IPhoto[];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getData('photos').subscribe(
            data => {
                this.photos = data;
            }
        );
    }

}
