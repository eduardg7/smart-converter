// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  urls: {
    CONVERSIONS_URL: '../../assets/lib/conversion.json',
    UNITS_URL: '../../assets/lib/units.json',
    CLOTHING_SIZES_URL: '../../assets/lib/clothingSizes.json',
    CLOTHING_URL: '../../assets/lib/clothing.json'
  },
  currency: {
    urls: {
      CURRENCY_URL: '../../assets/lib/currency.json',
      EXCHANGE_URL: '../../assets/lib/exchange.json',
      LATEST: 'http://data.fixer.io/api/latest',
      HISTORICAL: 'http://data.fixer.io/api',
      CONVERT: 'http://data.fixer.io/api/convert',
      TIME_SERIES: 'http://data.fixer.io/api/timeseries',
      FLUCTUATION: 'http://data.fixer.io/api/fluctuation'
    },
    keys: {
      API_KEY: '6ea24d0c547700f4917234aef80159d8'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
