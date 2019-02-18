import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPDFComponent } from './ruta-pdf.component';

describe('RutaPDFComponent', () => {
  let component: RutaPDFComponent;
  let fixture: ComponentFixture<RutaPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
