import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOrStatemanagement } from './state-or-statemanagement';

describe('StateOrStatemanagement', () => {
  let component: StateOrStatemanagement;
  let fixture: ComponentFixture<StateOrStatemanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateOrStatemanagement],
    }).compileComponents();

    fixture = TestBed.createComponent(StateOrStatemanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
