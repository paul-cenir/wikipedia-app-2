import { WikipediaService } from './../http-services/wikipedia.service';
import { Component } from '@angular/core';

@Component({
    selector: 'wikipedia',
    templateUrl: 'wikipedia.component.html'
})
export class WikipediaComponent  {
    searhList: any;
    constructor(
        protected WikipediaService: WikipediaService,
    ) {

    }

    searchValue(searchValue) {
        this.getSearchList(searchValue);
    }


    private getSearchList(searchValue) {
        this.WikipediaService.getWikipediaSearchResult(searchValue).subscribe(
            response => {
                if (response["query"]["search"]) {
                    this.searhList = response["query"]["search"];
                    console.log(this.searhList);
                }
            },
            error => {
                console.log(error);
            }
        );
    }
}
