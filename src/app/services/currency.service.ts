import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()

export class CurrencyService {

    public constructor(private _http: HttpClient) {
    }

    public getCurrencyServices() {
        return this._http.get(environment.currency.urls.CURRENCY_URL).pipe(response => {
            return response;
        });
    }

    public getExchanges() {
        return this._http.get(environment.currency.urls.EXCHANGE_URL).pipe(response => {
            return response;
        });
    }

    public getLatestCurrency() {
        return this._http.get('http://data.fixer.io/api/latest?access_key=6ea24d0c547700f4917234aef80159d8').pipe(response => {
            return response;
        });
    }

    public convertCurrency(from, to, amount) {
        return this._http.get(environment.currency.urls.CONVERT + '?access_key=' + environment.currency.keys.API_KEY + '&from=' + from + '&to=' + to + '&amount=' + amount).pipe(response => {
            return response;
        });
    }
}
