import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePromises } from './observable-promises';

describe('ObservablePromises', () => {
  let component: ObservablePromises;
  let fixture: ComponentFixture<ObservablePromises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablePromises],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablePromises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
