import { modelInitialState } from './model.init';
import { Model } from './model.interfaces';
import { modelReducer } from './model.reducer';

describe('modelReducer', () => {
  describe('TICKETS_LOADED', () => {
    // ...
  });

  describe('TICKET_SUBMITTED', () => {
    it('should add a new ticket to the list of tickets', () => {
      const fakeTicket = <any>'fakeTicket';
      const updatedState = modelReducer(modelInitialState, { type: 'TICKET_SUBMITTED', payload: fakeTicket });
      expect(updatedState.tickets).toEqual([fakeTicket]);
    });
  });
});
