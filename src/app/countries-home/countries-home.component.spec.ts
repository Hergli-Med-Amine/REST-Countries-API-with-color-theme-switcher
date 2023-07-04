import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHomeComponent } from './countries-home.component';

describe('CountriesHomeComponent', () => {
  let component: CountriesHomeComponent;
  let fixture: ComponentFixture<CountriesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesHomeComponent]
    });
    fixture = TestBed.createComponent(CountriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
