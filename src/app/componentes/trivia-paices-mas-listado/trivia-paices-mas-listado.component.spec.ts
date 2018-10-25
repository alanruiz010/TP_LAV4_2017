import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaPaicesMasListadoComponent } from './trivia-paices-mas-listado.component';

describe('TriviaPaicesMasListadoComponent', () => {
  let component: TriviaPaicesMasListadoComponent;
  let fixture: ComponentFixture<TriviaPaicesMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaPaicesMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaPaicesMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
