import { WikipediaService } from './../http-services/wikipedia.service';
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'wikipedia',
    templateUrl: 'wikipedia.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .search-input {
        width: 100%;
        padding: 16px;
    }
    .list-container {
        margin-top:20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
  `],
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
