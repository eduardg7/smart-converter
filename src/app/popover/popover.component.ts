import {Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
    public area: string;
    public description: string;

    constructor(public navParams: NavParams) {
        console.log(this.navParams.data);
        this.area = this.navParams.get('area');
        this.description = this.navParams.get('description');
    }

    ngOnInit() {
    }

}
