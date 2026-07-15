import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContent } from './service-content';

describe('ServiceContent', () => {
  let component: ServiceContent;
  let fixture: ComponentFixture<ServiceContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
