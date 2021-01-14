import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()

export class ConversionService {

    public constructor(private _http: HttpClient) {
    }

    public getUnits() {
        return this._http.get(environment.urls.UNITS_URL).pipe(response => {
            return response;
        });
    }

    public getConversions() {
        return this._http.get(environment.urls.CONVERSIONS_URL).pipe(response => {
            return response;
        });
    }

    public getClothingSizes() {
        return this._http.get(environment.urls.CLOTHING_SIZES_URL).pipe(response => {
            return response;
        });
    }

    public getClothing() {
        return this._http.get(environment.urls.CLOTHING_URL).pipe(response => {
            return response;
        });
    }
}
