/**
 * Created by cramirez on 24/01/2017.
 */
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedService {
    http: any;
    feedURL: String;

    constructor(http: Http) {
        this.http = http;
        this.feedURL = 'http://demos.9lessons.info/blogfeed/';
    }

    getPosts(category, limit) {
        return this.http.get(this.feedURL + category + '/' + limit).map(res => res.json());
    }
}