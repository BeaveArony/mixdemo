import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ModelEffects } from './+state/model.effects';
import { modelInitialState } from './+state/model.init';
import { modelReducer } from './+state/model.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('model', modelReducer, { initialState: modelInitialState }),
    EffectsModule.forFeature([ModelEffects])
  ],
  providers: [ModelEffects]
})
export class ModelModule {}
