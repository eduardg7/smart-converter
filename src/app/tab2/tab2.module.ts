import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab2Page} from './tab2.page';
import {ClothingPipe} from '../pipes/clothing.pipe';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    exports: [
        ClothingPipe,
    ],
    declarations: [Tab2Page, ClothingPipe]
})
export class Tab2PageModule {
}
