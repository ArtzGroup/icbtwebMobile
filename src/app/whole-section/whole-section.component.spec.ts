import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeSectionComponent } from './whole-section.component';

describe('WholeSectionComponent', () => {
  let component: WholeSectionComponent;
  let fixture: ComponentFixture<WholeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
