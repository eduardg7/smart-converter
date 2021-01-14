import {Component, OnInit} from '@angular/core';
import {FilterPipe} from '../pipes/filter.pipe';
/* Other Imports */
import * as _ from 'lodash';
import {ConversionService} from '../services/conversion.service';
import {Events, LoadingController, ModalController, NavController, PopoverController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';
import {PopoverComponent} from '../popover/popover.component';
import {ClipboardModule} from 'ngx-clipboard';
import {ParamsService} from '../services/params.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    providers: [ConversionService, FilterPipe, ParamsService]
})

export class Tab1Page implements OnInit {
    public conversionResult;
    public fromValue;
    public toValue;
    public searchText;
    public units;
    public conversions;
    public isSearchRevealed: boolean = false;
    public isCarouselRevealed: boolean = true;

    public constructor(private conversionService: ConversionService, private filter: FilterPipe, private modalController: ModalController, private loadingController: LoadingController, private popoverController: PopoverController, private navCtrl: NavController, private _paramsService: ParamsService, public events: Events, private storage: Storage, private _clipboardService: ClipboardModule) {
    }

    public ngOnInit() {
        this.init().then(() => {
            this.hideLoading();
        }).catch(error => {
            console.log(error);
        });
    }

    public async init() {
        this.showLoading();
        await this.fetchUnits();
        await this.fetchConversion();
    }

    public async fetchUnits() {
        await this.conversionService.getUnits().subscribe((data) => {
            this.units = data;
            console.log(this.units);
        }, error => {
            console.log(error);
        });
    }

    public openConverter(index, item) {
        console.log(index, item);
        this.storage.set('unitIndex', index);
        this.storage.set('unit', item);
        this.navCtrl.navigateForward('/tabs/converter');
    }

    public async fetchConversion() {
        await this.conversionService.getConversions().subscribe((data) => {
            this.conversions = data;
            console.log(this.conversions);
        }, error => {
            console.log(error);
        });
    }

    public async showLoading() {
        const loading = await this.loadingController.create({
            spinner: 'crescent',
            message: 'Please wait...',
            duration: 1000,
            translucent: false,
            cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }

    public async hideLoading() {
        await this.loadingController.dismiss();
    }

    /* Convert Function */
    public convert(index, input, from, to, area) {
        if (input && from && to && typeof from === 'string' && typeof to === 'string') {
            console.log(index, input, from, to, area);
            _.forEach(this.conversions, (item) => {
                for (let i in item) {
                    if (_.isEqual(i, area.toLowerCase())) {
                        this.units[index].values.conversionResult = input * (item[i].fromBase[from] / item[i].fromBase[to]);
                    }
                }
            });
        }
    }

    public switch(input, index, from, to, area) {
        this.units[index].values.fromValue = to;
        this.units[index].values.toValue = from;
        if (input && from && to && typeof from === 'string' && typeof to === 'string') {
            this.convert(index, input, this.units[index].values.fromItem, this.units[index].values.toItem, area);
        }
    }

    public copy(text: string) {
        // this._clipboardService.copyFromContent(text)
    }

    /* Reveal Search */
    public revealSearch() {
        this.isSearchRevealed = !this.isSearchRevealed;
    }

    /* Reveal Carousel */
    public revealCarousel() {
        this.isCarouselRevealed = !this.isCarouselRevealed;
    }

    /* Reveal Search */
    public hideSearch() {
        this.isSearchRevealed = false;
    }

    /* Reveal Carousel */
    public hideCarousel() {
        this.isCarouselRevealed = false;
    }

    /* Open Modal */
    public async openModal(index, type) {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ModalComponent,
                componentProps: {
                    modalType: 'converter',
                    index: index,
                    type: type,
                    units: this.units,
                    conversions: this.conversions
                }
            });

        modal.onDidDismiss().then((detail) => {
            if (detail !== null) {
                switch (detail.data.type) {
                    case 'from':
                        this.units[detail.data.index].values.fromValue = detail.data.choice;
                        break;
                    case 'to':
                        this.units[detail.data.index].values.toValue = detail.data.choice;
                        break;
                }
                console.log('The result:', detail.data);
            }
        });
        await modal.present();
    }

    public async openPopover(ev: any, index) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: ev,
            componentProps: {
                area: this.units[index].converter,
                description: this.units[index].description
            },
            translucent: false
        });
        return await popover.present();
    }
}
