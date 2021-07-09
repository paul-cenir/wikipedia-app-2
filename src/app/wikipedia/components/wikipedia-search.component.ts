import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'wikipedia-search',
    templateUrl: 'wikipedia-search.component.html'
})
export class WikipediaSearchComponent  {
    @Output() searchValue = new EventEmitter();

    constructor(
    ) {

    }

    searchEmit(event) {
        this.searchValue.emit(event.target.value);
    }
}
