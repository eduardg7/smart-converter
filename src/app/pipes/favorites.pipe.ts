import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'favorites'
})
export class FavoritesPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if (!items) {
            return [];
        }
        items = _.filter(items, item => {
            return item.isMostUsed;
        });

        return _.sortBy(items, (item) => {
            return item.priority;
        });
    }
}
