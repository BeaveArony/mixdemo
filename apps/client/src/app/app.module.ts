import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClientuiModule, ClientUiRoutes } from '@helpdesk2/clientui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NxModule.forRoot(),
    RouterModule.forRoot(ClientUiRoutes),
    ClientuiModule,
    BrowserAnimationsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
