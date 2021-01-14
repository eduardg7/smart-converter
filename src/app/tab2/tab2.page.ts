import {Component, OnInit} from '@angular/core';
/* Other Imports */
import * as _ from 'lodash';
import {ConversionService} from '../services/conversion.service';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';
import {PopoverComponent} from '../popover/popover.component';
import {ClothingPipe} from '../pipes/clothing.pipe';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    providers: [ConversionService, ClothingPipe]
})

export class Tab2Page implements OnInit {
    public conversionResult;
    public fromValue;
    public toValue;
    public searchText;
    public clothing;
    public clothingSizes;
    public isSearchRevealed: boolean = false;
    public isCarouselRevealed: boolean = true;
    public result = {
        'fromItem': null,
        'toItem': null
    };

    public constructor(private conversionService: ConversionService, private modalController: ModalController, private clothingPipe: ClothingPipe, private loadingController: LoadingController, private popoverController: PopoverController) {
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
        await this.fetchClothing();
        await this.fetchClothingSizes();
    }

    public async fetchClothingSizes() {
        await this.conversionService.getClothingSizes().subscribe((data) => {
            this.clothingSizes = data;
            console.log(this.clothingSizes);
        }, error => {
            console.log(error);
        });
    }

    public async fetchClothing() {
        await this.conversionService.getClothing().subscribe((data) => {
            this.clothing = data;
            console.log(this.clothing);
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
            console.log("Converter started ...");
            for (let i in this.clothingSizes) {
                if (i == area) {
                    for (let k in this.clothingSizes[i]) {
                        if (k == from) {
                            this.result.fromItem = _.find(this.clothingSizes[i][k], (item) => {
                                return item.value == input;
                            });
                        }
                        if (k == to) {
                            this.result.toItem = _.find(this.clothingSizes[i][k], (item) => {
                                return item.id == this.result.fromItem.id;
                            });
                            this.clothing[index].values.conversionResult = this.result.toItem.value;
                        }
                    }
                }
            }
        }
    }

    public switch(input, index, from, to, area) {
        this.clothing[index].values.fromValue = to;
        this.clothing[index].values.toValue = from;
        // if (input && from && to && typeof from === 'string' && typeof to === 'string') {
            this.convert(index, input, this.clothing[index].values.fromItem, this.clothing[index].values.toItem, area);
        // }
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

    public async openModal(index, type) {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ModalComponent,
                componentProps: {
                    modalType: 'clothing',
                    index: index,
                    type: type,
                    clothingSizes: this.clothingSizes
                }
            });

        modal.onDidDismiss().then((detail) => {
            if (detail !== null) {
                switch (detail.data.type) {
                    case 'from':
                        this.clothing[detail.data.index].values.fromValue = detail.data.choice;
                        break;
                    case 'to':
                        this.clothing[detail.data.index].values.toValue = detail.data.choice;
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
                area: this.clothing[index].name,
                description: this.clothing[index].description
            },
            translucent: false
        });
        return await popover.present();
    }
}
