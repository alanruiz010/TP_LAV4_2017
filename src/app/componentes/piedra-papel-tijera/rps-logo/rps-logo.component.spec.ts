import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsLogoComponent } from './rps-logo.component';

describe('RpsLogoComponent', () => {
  let component: RpsLogoComponent;
  let fixture: ComponentFixture<RpsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
