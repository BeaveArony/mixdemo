import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

@Component({ selector: 'app-reason', templateUrl: './reason-dialog.component.html' })
export class ReasonDialogComponent {
  form = new FormControl('', Validators.required);

  constructor(
    private store: Store<ModelState>,
    @Inject(MD_DIALOG_DATA) public data: { ticketId: number },
    private dialogRef: MdDialogRef<ReasonDialogComponent>
  ) {}

  resolve() {
    this.store.dispatch({ type: 'RESOLVE_TICKET', payload: { ticketId: this.data.ticketId, reason: this.form.value } });
    this.closeDialogAfterResolved();
  }

  private closeDialogAfterResolved() {
    this.store
      .filter(s => {
        const ticket = s.model.tickets.filter(t => t.id === this.data.ticketId)[0];
        return ticket.status === 'resolved';
      })
      .first()
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  cancel() {
    this.dialogRef.close();
  }
}
