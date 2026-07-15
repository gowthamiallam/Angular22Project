import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleContent } from './sample-content';

describe('SampleContent', () => {
  let component: SampleContent;
  let fixture: ComponentFixture<SampleContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleContent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
