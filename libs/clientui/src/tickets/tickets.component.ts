import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { ModelState } from '@helpdesk2/model';
import { Store } from '@ngrx/store';

@Component({ selector: 'app-tickets', templateUrl: './tickets.component.html', styleUrls: ['./tickets.component.css'] })
export class TicketsComponent {
  tickets = this.store.select('model', 'tickets');

  constructor(private store: Store<ModelState>) {
    // Store is yellow cause it's a type/class
    // Observable is not cause it is also a runtime value
  }
}
