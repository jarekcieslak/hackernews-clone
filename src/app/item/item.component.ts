import {Component, OnInit, Input} from '@angular/core';
import {HackernewsApiService} from "../hackernews-api.service";

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input()
    itemID: number;

    @Input()
    item;

    constructor() {
    }

    ngOnInit() {

    }

}
