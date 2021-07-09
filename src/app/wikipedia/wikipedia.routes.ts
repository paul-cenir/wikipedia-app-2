import { AppWikipediaModule } from './wikipedia.module';
import { RouterModule } from '@angular/router';
import { WikipediaComponent } from './components/wikipedia.component';

export const WikipediaRoutes = RouterModule.forChild([
    {
        component: WikipediaComponent,
        path: 'search',
        loadChildren:() => AppWikipediaModule,
    },
]);
