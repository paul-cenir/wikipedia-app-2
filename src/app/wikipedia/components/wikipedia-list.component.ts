import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wikipedia-list',
    templateUrl: 'wikipedia-list.component.html'
})
export class WikipediaListComponent implements OnInit {
    @Input() public searhList:any
    constructor(
    ) {

    }

    ngOnInit() {

    }
}
