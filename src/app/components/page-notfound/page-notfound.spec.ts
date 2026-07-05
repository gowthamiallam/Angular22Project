import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfound } from './page-notfound';

describe('PageNotfound', () => {
  let component: PageNotfound;
  let fixture: ComponentFixture<PageNotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotfound],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotfound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
