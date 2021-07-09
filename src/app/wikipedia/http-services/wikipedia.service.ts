import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';


@Injectable()
export class WikipediaService {

    constructor(
        private Http: HttpClient,
    ) {

    }

    getWikipediaSearchResult(searchValue) {
        //need to config
        let endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*";
        endpoint += `&srsearch=${searchValue}`
        return this.Http.get(endpoint);
    }

}
