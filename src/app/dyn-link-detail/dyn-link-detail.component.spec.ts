import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynLinkDetailComponent } from './dyn-link-detail.component';

describe('DynLinkDetailComponent', () => {
  let component: DynLinkDetailComponent;
  let fixture: ComponentFixture<DynLinkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynLinkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynLinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
