import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {FilterPipe} from '../pipes/filter.pipe';
import {FavoritesPipe} from '../pipes/favorites.pipe';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
    ],
    exports: [
        FilterPipe,
        FavoritesPipe
    ],
    declarations: [Tab1Page, FilterPipe, FavoritesPipe]
})
export class Tab1PageModule {}
