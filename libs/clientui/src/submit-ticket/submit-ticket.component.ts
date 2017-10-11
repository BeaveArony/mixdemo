import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    severity: new FormControl('low')
  });

  constructor(private store: Store<ModelState>, private router: Router) {}

  submitTicket() {
    this.store.dispatch({ type: 'SUBMIT_TICKET', payload: this.form.value });
    this.router.navigate(['/tickets']);
  }
}
