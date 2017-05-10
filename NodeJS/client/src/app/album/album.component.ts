import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {HttpService} from "../shared/http.service";
import {IPhoto} from '../shared/photo.interface';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {

    private id: number;
    private photos: IPhoto[];
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.httpService.getData(`albums/${this.id}/photos`).subscribe(
            data => {
                this.photos = data;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
