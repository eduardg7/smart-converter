(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(n,t,o){"use strict";o.r(t);var e=o("8Y7J");class l{}var i=o("pMnS"),c=o("oBZk"),r=o("ZZ/e"),a=o("s7LF"),u=o("SVse");class s{transform(n,t){return n?t?(t=t.toLowerCase(),n.filter(n=>n.converter.toLowerCase().includes(t))):n:[]}}var d=o("8Vam"),g=o("IheW"),h=o("HjzM"),b=o("mrSG"),C=o("LvDl"),M=o("XwkG"),P=o("7VvD");class O{constructor(n,t,o,e,l,i,c,r,a,u){this.conversionService=n,this.filter=t,this.modalController=o,this.loadingController=e,this.popoverController=l,this.navCtrl=i,this._paramsService=c,this.events=r,this.storage=a,this._clipboardService=u,this.isSearchRevealed=!1,this.isCarouselRevealed=!0}ngOnInit(){this.init().then(()=>{this.hideLoading()}).catch(n=>{console.log(n)})}init(){return b.b(this,void 0,void 0,(function*(){this.showLoading(),yield this.fetchUnits(),yield this.fetchConversion()}))}fetchUnits(){return b.b(this,void 0,void 0,(function*(){yield this.conversionService.getUnits().subscribe(n=>{this.units=n,console.log(this.units)},n=>{console.log(n)})}))}openConverter(n,t){console.log(n,t),this.storage.set("unitIndex",n),this.storage.set("unit",t),this.navCtrl.navigateForward("/tabs/converter")}fetchConversion(){return b.b(this,void 0,void 0,(function*(){yield this.conversionService.getConversions().subscribe(n=>{this.conversions=n,console.log(this.conversions)},n=>{console.log(n)})}))}showLoading(){return b.b(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({spinner:"crescent",message:"Please wait...",duration:1e3,translucent:!1,cssClass:"custom-class custom-loading"});return yield n.present()}))}hideLoading(){return b.b(this,void 0,void 0,(function*(){yield this.loadingController.dismiss()}))}convert(n,t,o,e,l){t&&o&&e&&"string"==typeof o&&"string"==typeof e&&(console.log(n,t,o,e,l),C.forEach(this.conversions,i=>{for(let c in i)C.isEqual(c,l.toLowerCase())&&(this.units[n].values.conversionResult=t*(i[c].fromBase[o]/i[c].fromBase[e]))}))}switch(n,t,o,e,l){this.units[t].values.fromValue=e,this.units[t].values.toValue=o,n&&o&&e&&"string"==typeof o&&"string"==typeof e&&this.convert(t,n,this.units[t].values.fromItem,this.units[t].values.toItem,l)}copy(n){}revealSearch(){this.isSearchRevealed=!this.isSearchRevealed}revealCarousel(){this.isCarouselRevealed=!this.isCarouselRevealed}hideSearch(){this.isSearchRevealed=!1}hideCarousel(){this.isCarouselRevealed=!1}openModal(n,t){return b.b(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:M.a,componentProps:{modalType:"converter",index:n,type:t,units:this.units,conversions:this.conversions}});o.onDidDismiss().then(n=>{if(null!==n){switch(n.data.type){case"from":this.units[n.data.index].values.fromValue=n.data.choice;break;case"to":this.units[n.data.index].values.toValue=n.data.choice}console.log("The result:",n.data)}}),yield o.present()}))}openPopover(n,t){return b.b(this,void 0,void 0,(function*(){const o=yield this.popoverController.create({component:P.a,event:n,componentProps:{area:this.units[t].converter,description:this.units[t].description},translucent:!1});return yield o.present()}))}}var p=o("xgBC"),_=o("IbkX"),m=e.lb({encapsulation:0,styles:[["div.sub-header-container[_ngcontent-%COMP%]   div.carousel-container[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:80%;display:block;float:left}div.sub-header-container[_ngcontent-%COMP%]   div.carousel-container[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20%;height:20px;margin:0 auto;display:block}div.sub-header-container[_ngcontent-%COMP%]   div.carousel-container[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-icon.rotate[_ngcontent-%COMP%]{transform:rotate(180deg);transition-duration:.5s;transition-property:transform}div.sub-header-container[_ngcontent-%COMP%]   div.search-container[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:80%;display:block;float:left}div.sub-header-container[_ngcontent-%COMP%]   div.search-container[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20%;height:20px;margin:0 auto;display:block}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.physics[_ngcontent-%COMP%]{color:rgba(0,4,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.it[_ngcontent-%COMP%]{color:rgba(255,117,80,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.photometry[_ngcontent-%COMP%]{color:rgba(96,29,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.chemistry[_ngcontent-%COMP%]{color:rgba(202,13,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.other[_ngcontent-%COMP%]{color:rgba(0,115,32,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.geometry[_ngcontent-%COMP%]{color:rgba(186,141,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle.astronomy[_ngcontent-%COMP%]{color:rgba(202,92,79,.26)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:25px;height:25px;display:block;position:absolute;top:10%;right:calc(10% - 25px)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.arrow-expand[_ngcontent-%COMP%]{bottom:10%;top:initial}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.rotate[_ngcontent-%COMP%]{transform:rotate(180deg);transition-duration:.5s;transition-property:transform}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.physics[_ngcontent-%COMP%]{color:rgba(0,4,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.it[_ngcontent-%COMP%]{color:rgba(255,117,80,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.photometry[_ngcontent-%COMP%]{color:rgba(96,29,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.chemistry[_ngcontent-%COMP%]{color:rgba(202,13,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.other[_ngcontent-%COMP%]{color:rgba(0,115,32,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.geometry[_ngcontent-%COMP%]{color:rgba(186,141,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-icon.astronomy[_ngcontent-%COMP%]{color:rgba(202,92,79,.26)}ion-content[_ngcontent-%COMP%]   ion-card.physics[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(0,4,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card.it[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(255,117,80,.3)}ion-content[_ngcontent-%COMP%]   ion-card.photometry[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(96,29,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card.chemistry[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(202,13,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card.other[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(0,115,32,.3)}ion-content[_ngcontent-%COMP%]   ion-card.geometry[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(186,141,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card.astronomy[_ngcontent-%COMP%]{box-shadow:2px 2px 10px rgba(202,92,79,.26)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider[_ngcontent-%COMP%]{width:90%;height:1px;display:block;background:#dadada;margin:0 auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.physics[_ngcontent-%COMP%]{background-color:rgba(0,4,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.it[_ngcontent-%COMP%]{background-color:rgba(255,117,80,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.photometry[_ngcontent-%COMP%]{background-color:rgba(96,29,115,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.chemistry[_ngcontent-%COMP%]{background-color:rgba(202,13,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.other[_ngcontent-%COMP%]{background-color:rgba(0,115,32,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.geometry[_ngcontent-%COMP%]{background-color:rgba(186,141,0,.3)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   div.divider.astronomy[_ngcontent-%COMP%]{background-color:rgba(202,92,79,.26)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%]   div.convert-from-left-side[_ngcontent-%COMP%]{width:100%;height:auto;display:block;float:left;box-sizing:border-box}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%]   div.convert-from-left-side[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{width:100%;height:55px;display:block;float:left;text-align:center;font-size:28px;--padding-end:0;--padding-start:0;line-height:55px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%]   div.convert-from-right-side[_ngcontent-%COMP%]{width:100%;height:auto;display:block;float:left;box-sizing:border-box}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%]   div.convert-from-right-side[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:55px;float:left;display:block;text-transform:inherit;text-align:center;font-size:28px;color:#000;font-weight:lighter}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.covert-from[_ngcontent-%COMP%]   div.convert-from-right-side[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:90%;height:100%;line-height:55px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.reverse-wrapper[_ngcontent-%COMP%]{width:100%;display:table;margin:15px 0 15px auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.reverse-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:48px;height:48px;display:block;margin:0 auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-to[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-to[_ngcontent-%COMP%]   div.convert-to-right-side[_ngcontent-%COMP%]{width:100%;height:auto;display:block;float:left;box-sizing:border-box}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-to[_ngcontent-%COMP%]   div.convert-to-right-side[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:55px;float:left;display:block;text-transform:inherit;text-align:center;font-size:28px;color:#000;font-weight:lighter}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-to[_ngcontent-%COMP%]   div.convert-to-right-side[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:90%;height:100%;line-height:55px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-total[_ngcontent-%COMP%]{width:100%;height:auto;display:block;float:left;box-sizing:border-box}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-total[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:55px;float:left;display:block;text-transform:inherit;text-align:center;font-size:28px;color:#000;font-weight:lighter}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div.convert-total[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:90%;height:100%;line-height:55px}"]],data:{}});function v(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,8,"ion-toolbar",[],null,null,null,c.fb,c.C)),e.mb(1,49152,null,0,r.Bb,[e.h,e.k,e.x],null,null),(n()(),e.nb(2,0,null,0,6,"ion-searchbar",[["animated",""],["autocomplete","on"],["debounce","500"],["placeholder","Search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,o){var l=!0,i=n.component;return"ionBlur"===t&&(l=!1!==e.wb(n,4)._handleBlurEvent(o.target)&&l),"ionChange"===t&&(l=!1!==e.wb(n,4)._handleInputEvent(o.target)&&l),"ngModelChange"===t&&(l=!1!==(i.searchText=o)&&l),l}),c.W,c.t)),e.mb(3,49152,null,0,r.jb,[e.h,e.k,e.x],{animated:[0,"animated"],autocomplete:[1,"autocomplete"],debounce:[2,"debounce"],placeholder:[3,"placeholder"]},null),e.mb(4,16384,null,0,r.Ob,[e.k],null,null),e.Ab(1024,null,a.e,(function(n){return[n]}),[r.Ob]),e.mb(6,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ab(2048,null,a.f,null,[a.h]),e.mb(8,16384,null,0,a.g,[[4,a.f]],null,null)],(function(n,t){var o=t.component;n(t,3,0,"","on","500","Search"),n(t,6,0,o.searchText)}),(function(n,t){n(t,2,0,e.wb(t,8).ngClassUntouched,e.wb(t,8).ngClassTouched,e.wb(t,8).ngClassPristine,e.wb(t,8).ngClassDirty,e.wb(t,8).ngClassValid,e.wb(t,8).ngClassInvalid,e.wb(t,8).ngClassPending)}))}function x(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,21,"ion-card",[],null,null,null,c.K,c.d)),e.mb(1,49152,null,0,r.l,[e.h,e.k,e.x],null,null),e.mb(2,278528,null,0,u.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.yb(3,{physics:0,geometry:1,chemistry:2,photometry:3,it:4,other:5,astronomy:6}),(n()(),e.nb(4,0,null,0,17,"ion-card-header",[],null,null,null,c.H,c.f)),e.mb(5,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(n()(),e.nb(6,0,null,0,4,"ion-card-subtitle",[],null,null,null,c.I,c.g)),e.mb(7,49152,null,0,r.o,[e.h,e.k,e.x],null,null),e.mb(8,278528,null,0,u.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.yb(9,{physics:0,geometry:1,chemistry:2,photometry:3,it:4,other:5,astronomy:6}),(n()(),e.Db(10,0,["",""])),(n()(),e.nb(11,0,null,0,2,"ion-card-title",[],null,null,null,c.J,c.h)),e.mb(12,49152,null,0,r.p,[e.h,e.k,e.x],null,null),(n()(),e.Db(13,0,["",""])),(n()(),e.nb(14,0,null,0,3,"ion-icon",[["name","information-circle-outline"]],null,[[null,"click"]],(function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.openPopover(o,n.context.index)&&e),e}),c.N,c.k)),e.mb(15,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null),e.mb(16,278528,null,0,u.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.yb(17,{physics:0,geometry:1,chemistry:2,photometry:3,it:4,other:5,astronomy:6}),(n()(),e.nb(18,0,null,0,3,"ion-icon",[["class","arrow-expand"],["src","../../assets/images/open_1.svg"]],null,[[null,"click"]],(function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.openConverter(n.context.index,n.context.$implicit)&&e),e}),c.N,c.k)),e.mb(19,49152,null,0,r.B,[e.h,e.k,e.x],{src:[0,"src"]},null),e.mb(20,278528,null,0,u.h,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.yb(21,{physics:0,geometry:1,chemistry:2,photometry:3,it:4,other:5,astronomy:6,rotate:7,bounce:8})],(function(n,t){var o=n(t,3,0,"Physics"==t.context.$implicit.section,"Geometry"==t.context.$implicit.section,"Chemistry"==t.context.$implicit.section,"Photometry"==t.context.$implicit.section,"IT"==t.context.$implicit.section,"Other"==t.context.$implicit.section,"Astronomy"==t.context.$implicit.section);n(t,2,0,o);var e=n(t,9,0,"Physics"==t.context.$implicit.section,"Geometry"==t.context.$implicit.section,"Chemistry"==t.context.$implicit.section,"Photometry"==t.context.$implicit.section,"IT"==t.context.$implicit.section,"Other"==t.context.$implicit.section,"Astronomy"==t.context.$implicit.section);n(t,8,0,e),n(t,15,0,"information-circle-outline");var l=n(t,17,0,"Physics"==t.context.$implicit.section,"Geometry"==t.context.$implicit.section,"Chemistry"==t.context.$implicit.section,"Photometry"==t.context.$implicit.section,"IT"==t.context.$implicit.section,"Other"==t.context.$implicit.section,"Astronomy"==t.context.$implicit.section);n(t,16,0,l),n(t,19,0,"../../assets/images/open_1.svg");var i=n(t,21,0,"Physics"==t.context.$implicit.section,"Geometry"==t.context.$implicit.section,"Chemistry"==t.context.$implicit.section,"Photometry"==t.context.$implicit.section,"IT"==t.context.$implicit.section,"Other"==t.context.$implicit.section,"Astronomy"==t.context.$implicit.section,t.context.$implicit.isExpanded,!t.context.$implicit.isExpanded);n(t,20,0,"arrow-expand",i)}),(function(n,t){n(t,10,0,t.context.$implicit.section),n(t,13,0,t.context.$implicit.converter)}))}function f(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,2,null,x)),e.mb(2,278528,null,0,u.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.zb(3,2)],(function(n,t){var o=t.component,l=e.Eb(t,2,0,n(t,3,0,e.wb(t.parent,0),o.units,o.searchText));n(t,2,0,l)}),null)}function y(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,15,"ion-card",[],null,null,null,c.K,c.d)),e.mb(1,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(n()(),e.nb(2,0,null,0,13,"ion-card-header",[],null,null,null,c.H,c.f)),e.mb(3,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(n()(),e.nb(4,0,null,0,3,"ion-card-subtitle",[],null,null,null,c.I,c.g)),e.mb(5,49152,null,0,r.o,[e.h,e.k,e.x],null,null),(n()(),e.nb(6,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,c.Z,c.w)),e.mb(7,49152,null,0,r.ob,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.nb(8,0,null,0,3,"ion-card-title",[],null,null,null,c.J,c.h)),e.mb(9,49152,null,0,r.p,[e.h,e.k,e.x],null,null),(n()(),e.nb(10,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,c.Z,c.w)),e.mb(11,49152,null,0,r.ob,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.nb(12,0,null,0,3,"ion-icon",[],null,null,null,c.N,c.k)),e.mb(13,49152,null,0,r.B,[e.h,e.k,e.x],null,null),(n()(),e.nb(14,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 10%"]],null,null,null,c.Z,c.w)),e.mb(15,49152,null,0,r.ob,[e.h,e.k,e.x],{animated:[0,"animated"]},null)],(function(n,t){n(t,7,0,""),n(t,11,0,""),n(t,15,0,"")}),null)}function k(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,y)),e.mb(2,278528,null,0,u.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,2,0,t.component.units)}),null)}function w(n){return e.Fb(0,[e.xb(0,s,[]),(n()(),e.nb(1,0,null,null,6,"ion-header",[],null,null,null,c.M,c.j)),e.mb(2,49152,null,0,r.A,[e.h,e.k,e.x],null,null),(n()(),e.nb(3,0,null,0,4,"ion-toolbar",[],null,null,null,c.fb,c.C)),e.mb(4,49152,null,0,r.Bb,[e.h,e.k,e.x],null,null),(n()(),e.nb(5,0,null,0,2,"ion-title",[],null,null,null,c.eb,c.B)),e.mb(6,49152,null,0,r.zb,[e.h,e.k,e.x],null,null),(n()(),e.Db(-1,0,[" Smart Converter "])),(n()(),e.nb(8,0,null,null,20,"div",[["class","sub-header-container"]],null,null,null,null,null)),(n()(),e.nb(9,0,null,null,9,"div",[["class","carousel-container"]],null,null,null,null,null)),(n()(),e.nb(10,0,null,null,8,"ion-list-header",[],null,null,null,c.R,c.p)),e.mb(11,49152,null,0,r.O,[e.h,e.k,e.x],null,null),(n()(),e.nb(12,0,null,0,2,"ion-label",[],null,null,null,c.Q,c.n)),e.mb(13,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(n()(),e.Db(-1,0,["Most Used Converters"])),(n()(),e.nb(15,0,null,0,3,"ion-icon",[["name","arrow-dropdown"]],null,[[null,"click"]],(function(n,t,o){var e=!0,l=n.component;return"click"===t&&(l.revealCarousel(),e=!1!==l.hideSearch()&&e),e}),c.N,c.k)),e.mb(16,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null),e.mb(17,278528,null,0,u.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.yb(18,{rotate:0}),(n()(),e.nb(19,0,null,null,9,"div",[["class","search-container"]],null,null,null,null,null)),(n()(),e.nb(20,0,null,null,6,"ion-list-header",[],null,null,null,c.R,c.p)),e.mb(21,49152,null,0,r.O,[e.h,e.k,e.x],null,null),(n()(),e.nb(22,0,null,0,2,"ion-label",[],null,null,null,c.Q,c.n)),e.mb(23,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(n()(),e.Db(-1,0,["All Converters"])),(n()(),e.nb(25,0,null,0,1,"ion-icon",[["name","search"]],null,[[null,"click"]],(function(n,t,o){var e=!0,l=n.component;return"click"===t&&(l.revealSearch(),e=!1!==l.hideCarousel()&&e),e}),c.N,c.k)),e.mb(26,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.eb(16777216,null,null,1,null,v)),e.mb(28,16384,null,0,u.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(29,0,null,null,5,"ion-content",[],null,null,null,c.L,c.i)),e.mb(30,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,f)),e.mb(32,16384,null,0,u.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,k)),e.mb(34,16384,null,0,u.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component;n(t,16,0,"arrow-dropdown");var e=n(t,18,0,o.isCarouselRevealed);n(t,17,0,e),n(t,26,0,"search"),n(t,28,0,o.isSearchRevealed),n(t,32,0,o.units),n(t,34,0,!o.units)}),null)}function $(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,4,"app-tab1",[],null,null,null,w,m)),e.Ab(512,null,d.a,d.a,[g.c]),e.Ab(512,null,s,s,[]),e.Ab(512,null,h.a,h.a,[]),e.mb(4,114688,null,0,O,[d.a,s,r.Gb,r.Fb,r.Lb,r.Hb,h.a,r.c,p.b,_.a],null,null)],(function(n,t){n(t,4,0)}),null)}var I=e.jb("app-tab1",O,$,{},{},[]),B=o("iInd");o.d(t,"Tab1PageModuleNgFactory",(function(){return S}));var S=e.kb(l,[],(function(n){return e.tb([e.ub(512,e.j,e.Z,[[8,[i.a,I]],[3,e.j],e.v]),e.ub(4608,u.l,u.k,[e.s,[2,u.s]]),e.ub(4608,r.a,r.a,[e.x,e.g]),e.ub(4608,r.Gb,r.Gb,[r.a,e.j,e.p]),e.ub(4608,r.Lb,r.Lb,[r.a,e.j,e.p]),e.ub(4608,a.k,a.k,[]),e.ub(4608,a.c,a.c,[]),e.ub(1073742336,u.b,u.b,[]),e.ub(1073742336,r.Db,r.Db,[]),e.ub(1073742336,a.j,a.j,[]),e.ub(1073742336,a.d,a.d,[]),e.ub(1073742336,a.i,a.i,[]),e.ub(1073742336,B.o,B.o,[[2,B.u],[2,B.n]]),e.ub(1073742336,l,l,[]),e.ub(1024,B.l,(function(){return[[{path:"",component:O}]]}),[])])}))}}]);