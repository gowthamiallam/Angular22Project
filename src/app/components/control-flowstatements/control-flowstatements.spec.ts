import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowstatements } from './control-flowstatements';

describe('ControlFlowstatements', () => {
  let component: ControlFlowstatements;
  let fixture: ComponentFixture<ControlFlowstatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowstatements],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFlowstatements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
