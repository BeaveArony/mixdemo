import '../support-legacy'; // import your application files here.

import { Directive, ElementRef, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { setUpLocationSync } from '@angular/router/upgrade';
import { downgradeComponent, setAngularLib, UpgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular'; // replace with const angular = (<any>window).angular; if Angular is available globally

if (!angular.module('support-legacy')) {
  throw new Error('"support-legacy" is not loaded');
}

// all components downgraded from Angular to AngularJS go here
import { AppComponent } from './app.component';
angular.module('downgraded', []).directive('appRoot', downgradeComponent({ component: AppComponent }));
@Directive({
  selector: 'ng-view-cmp'
})
class NgViewComponent extends UpgradeComponent {
  constructor(ref: ElementRef, inj: Injector) {
    super('ngViewCmp', ref, inj);
  }
}
export const upgradedComponents = [NgViewComponent];

// additional configuration invoked right before bootstrap
export function configureLegacy(i: Injector) {
  setAngularLib(angular);
  //  Insert additional configuration here

  angular.module('downgraded').run(() => {
    setUpLocationSync(i.get(UpgradeModule));
    i.get(Router).initialNavigation();
  });
}
