import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ConversionService} from '../services/conversion.service';
import {CurrencyService} from '../services/currency.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    providers: [ConversionService, CurrencyService]
})

export class ModalComponent implements OnInit {
    public units;
    public exchanges;
    public clothing;
    public converter: string;
    public index: number;
    public type: string;
    public modalType;
    public result: object;

    public constructor(private modalController: ModalController,
                       private navParams: NavParams, private conversionService: ConversionService, private currencyService: CurrencyService) {
    }

    public ngOnInit() {
        switch (this.modalType) {
            case 'converter':
                this.conversionService.getUnits().subscribe((data) => {
                    this.units = data;
                    console.log(this.units);
                }, error => {
                    console.log(error);
                });
                break;
            case 'currency':
                this.currencyService.getExchanges().subscribe((data) => {
                    this.exchanges = data;
                    console.log(this.exchanges);
                }, error => {
                    console.log(error);
                });
                break;
            case 'clothing':
                this.conversionService.getClothing().subscribe((data) => {
                    this.clothing = data;
                    console.log(this.clothing);
                }, error => {
                    console.log(error);
                });
                break;
        }
    }

    public ionViewWillEnter() {
        this.modalType = this.navParams.get('modalType');
        this.index = this.navParams.get('index');
        this.type = this.navParams.get('type');
    }

    public async dismissModal(choice, type) {
        this.result = {
            index: this.index,
            choice: choice,
            type: type
        };
        await this.modalController.dismiss(this.result);
    }
}
