import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdInputModule,
  MdRadioModule,
  MdToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ModelModule, ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

import { ReasonDialogComponent } from './support-tickets/reason-dialog/reason-dialog.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

export const SupportuiRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'tickets' },
  { path: 'tickets', component: SupportTicketsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ModelModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdDialogModule
  ],
  declarations: [SupportTicketsComponent, ReasonDialogComponent],
  entryComponents: [ReasonDialogComponent]
})
export class SupportuiModule {
  constructor(store: Store<ModelState>) {
    store.dispatch({ type: 'LOAD_TICKETS' });
  }
}
