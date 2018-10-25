import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaPaicesComponent } from './trivia-paices.component';

describe('TriviaPaicesComponent', () => {
  let component: TriviaPaicesComponent;
  let fixture: ComponentFixture<TriviaPaicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaPaicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaPaicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
