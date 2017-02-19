import {Component, OnInit} from '@angular/core';
import {HackernewsApiService} from "../hackernews-api.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

    items: number[];

    typeSub: Subscription;
    pageSub: Subscription;
    storiesType: string;

    listStart: number;
    pageNum: number;

    constructor(private _hackerNewsApiService: HackernewsApiService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.typeSub = this.route.data.subscribe(data => this.storiesType = (data as any).storiesType);
        this.pageSub = this.route.params.subscribe(params => {
            this.pageNum = +params['page'] ? +params['page'] : 1;
            this._hackerNewsApiService.fetchStories(this.storiesType, this.pageNum)
                .subscribe(
                    items => this.items = items,
                    error => console.log('Error fetching' + this.storiesType + 'stories'),
                    () => {
                        this.listStart = ((this.pageNum - 1) * 30) + 1;
                        window.scrollTo(0, 0);
                    });
        });
    }

}
