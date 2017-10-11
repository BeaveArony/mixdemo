import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

import { ReasonDialogComponent } from './reason-dialog/reason-dialog.component';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css']
})
export class SupportTicketsComponent {
  currentUserId: number;
  tickets = this.store.select('model').map(state =>
    state.tickets.map(t => {
      const userName = state.users[t.userId].name;
      const assigneeName = t.assigneeId ? state.users[t.assigneeId].name : null;
      return { ...t, userName, assigneeName };
    })
  );

  constructor(private store: Store<ModelState>, private dialog: MdDialog) {
    this.store.select('model', 'currentUserId').subscribe(c => (this.currentUserId = c));
  }

  resolve(ticketId: number) {
    this.dialog.open(ReasonDialogComponent, { data: { ticketId } });
  }

  assign(ticketId: number) {
    this.store.dispatch({ type: 'ASSIGN_TICKET', payload: { ticketId } });
  }
}
