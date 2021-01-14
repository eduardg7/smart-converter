import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {CurrencyService} from '../services/currency.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
    providers: [CurrencyService]
})
export class Tab3Page implements OnInit {
    public base;
    public rates;
    public currencies = [];
    public currencyServices;
    public exchanges;
    public searchText;
    public amount;
    public fromCurrency;
    public toCurrency;
    public currencyResult;
    public isCardExpanded = {
        latest: false,
        converter: false,
        historical: false,
        fluctuation: false,
        timeline: false,
    };

    public constructor(private currencyService: CurrencyService, private modalController: ModalController, private loadingController: LoadingController, private popoverController: PopoverController) {
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
        await this.fetchExchanges();
        await this.fetchCurrencyServices();
    }


    public async convertCurrency(from, to, amount) {
        await this.currencyService.convertCurrency(from, to, amount).subscribe((data) => {
            console.log(data);
            this.currencyResult = data;
        }, error => {
            console.log(error);
        });
    }

    public async fetchExchanges() {
        await this.currencyService.getExchanges().subscribe((data) => {
            this.exchanges = data;
            console.log(this.exchanges);
        }, error => {
            console.log(error);
        });
    }


    public async fetchCurrencyServices() {
        await this.currencyService.getCurrencyServices().subscribe((data) => {
            this.currencyServices = data;
            console.log(this.currencyServices);
        }, error => {
            console.log(error);
        });
    }

    public async openModal(type) {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ModalComponent,
                componentProps: {
                    modalType: "currency",
                    type: type,
                    exchanges: this.exchanges
                }
            });

        modal.onDidDismiss().then((detail) => {
            if (detail !== null) {
                switch (detail.data.type) {
                    case 'from':
                        this.fromCurrency = detail.data.choice;
                        break;
                    case 'to':
                        this.toCurrency = detail.data.choice;
                        break;
                }
                console.log('The result:', detail.data);
            }
        });
        await modal.present();
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

    /* Expand Card */
    public expandCard(id) {
        this.isCardExpanded[id] = !this.isCardExpanded[id];
    }

}
