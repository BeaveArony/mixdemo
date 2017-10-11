import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { SupportuiModule, SupportuiRoutes } from '@helpdesk2/supportui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { configureLegacy, upgradedComponents } from './legacy-setup';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    UpgradeModule,
    SupportuiModule,
    RouterModule.forRoot([...SupportuiRoutes, { path: '**', component: EmptyComponent }]),
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent, ...upgradedComponents, EmptyComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    configureLegacy(this.upgrade.injector);
    this.upgrade.bootstrap(document.body, ['downgraded', 'support-legacy']);
  }
}
