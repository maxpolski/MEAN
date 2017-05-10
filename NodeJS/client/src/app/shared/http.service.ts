import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {IPhoto} from './photo.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    public getData(param: string): Observable<IPhoto[]> {
        let url = `http://jsonplaceholder.typicode.com/${param}`;
        return this.http.get(url)
            .map((resp: Response) => {
                return resp.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

}