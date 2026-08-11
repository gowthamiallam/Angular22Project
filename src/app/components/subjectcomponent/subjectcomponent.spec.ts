import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjectcomponent } from './subjectcomponent';

describe('Subjectcomponent', () => {
  let component: Subjectcomponent;
  let fixture: ComponentFixture<Subjectcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjectcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Subjectcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
