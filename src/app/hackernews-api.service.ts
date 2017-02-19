import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class HackernewsApiService {

    baseUrl: string = 'https://node-hnapi.herokuapp.com';

    constructor(private http: Http) {
    }

    fetchStories(storyType: string, page: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
            .map(response => response.json());
    }

    fetchItem(itemID: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/item/${itemID}.json`)
            .map(response => response.json())
    }

    fetchComments(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/item/${id}`)
            .map(response => response.json());
    }

}
