import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdRadioModule, MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ModelModule } from '@helpdesk2/model';
import { ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

import { SubmitTicketComponent } from './submit-ticket/submit-ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

export const ClientUiRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'tickets' },
  { path: 'tickets', component: TicketsComponent },
  { path: 'submit', component: SubmitTicketComponent }
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
    MdInputModule
  ],
  declarations: [TicketsComponent, SubmitTicketComponent]
})
export class ClientuiModule {
  constructor(store: Store<ModelState>) {
    store.dispatch({ type: 'LOAD_TICKETS' });
  }
}
