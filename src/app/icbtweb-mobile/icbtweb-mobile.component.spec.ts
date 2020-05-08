import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcbtwebMobileComponent } from './icbtweb-mobile.component';

describe('IcbtwebMobileComponent', () => {
  let component: IcbtwebMobileComponent;
  let fixture: ComponentFixture<IcbtwebMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcbtwebMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcbtwebMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
