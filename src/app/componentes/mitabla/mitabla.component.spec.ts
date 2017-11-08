import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitablaComponent } from './mitabla.component';

describe('MitablaComponent', () => {
  let component: MitablaComponent;
  let fixture: ComponentFixture<MitablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
