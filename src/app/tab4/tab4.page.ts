import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {CurrencyService} from '../services/currency.service';
import {CurrencyPipe} from '../pipes/currency.pipe';

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html',
    styleUrls: ['tab4.page.scss'],
    providers: [CurrencyService, CurrencyPipe]
})
export class Tab4Page implements OnInit {
    public base;
    public rates;
    public exchanges;
    public exchangeSelected;
    public currencies = [];
    public searchText;

    public constructor(private currencyService: CurrencyService, private filter: CurrencyPipe, private modalController: ModalController, private loadingController: LoadingController, private popoverController: PopoverController) {
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
        await this.fetchLatestCurrency();
    }

    public async fetchLatestCurrency() {
        await this.currencyService.getLatestCurrency().subscribe((data) => {
            this.rates = data['rates'];
            this.base = data['base'];
            for (let rate in this.rates) {
                if (rate && this.rates[rate]) {
                    this.currencies.push({
                        'currency': rate,
                        'rate': this.rates[rate]
                    });
                }
            }
            console.log(this.currencies, this.base);
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
}
