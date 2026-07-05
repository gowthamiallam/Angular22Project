import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExamples } from './directive-examples';

describe('DirectiveExamples', () => {
  let component: DirectiveExamples;
  let fixture: ComponentFixture<DirectiveExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveExamples],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
