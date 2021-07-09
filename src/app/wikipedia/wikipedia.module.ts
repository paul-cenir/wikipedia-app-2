import { CommonModule } from '@angular/common';
import { WikipediaService } from './http-services/wikipedia.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WikipediaSearchComponent } from './components/wikipedia-search.component';
import { WikipediaListComponent } from './components/wikipedia-list.component';
import { WikipediaRoutes } from './wikipedia.routes';
import { NgModule } from "@angular/core";
import { WikipediaComponent } from './components/wikipedia.component';


@NgModule({
    imports: [
        WikipediaRoutes,
        RouterModule,
        FormsModule,
        CommonModule
      
    ],
    declarations: [
        WikipediaComponent,
        WikipediaListComponent,
        WikipediaSearchComponent
    ],
    entryComponents: [
    ],
    providers: [
        WikipediaService
    ]
})

export class AppWikipediaModule {
}
