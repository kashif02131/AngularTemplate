import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynLinkComponent } from './dyn-link.component';

describe('DynLinkComponent', () => {
  let component: DynLinkComponent;
  let fixture: ComponentFixture<DynLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
