import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySectionComponent } from './library-section.component';

describe('LibrarySectionComponent', () => {
  let component: LibrarySectionComponent;
  let fixture: ComponentFixture<LibrarySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
