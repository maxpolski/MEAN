import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {HttpService} from "../shared/http.service";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnDestroy {

    private id: number;
    private photo;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {
        this.httpService.getData(`photos/${this.id}`).subscribe(
            data => {
                this.photo = data;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
