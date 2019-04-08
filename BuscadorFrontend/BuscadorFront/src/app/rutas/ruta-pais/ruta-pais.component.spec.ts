import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPaisComponent } from './ruta-pais.component';

describe('RutaPaisComponent', () => {
  let component: RutaPaisComponent;
  let fixture: ComponentFixture<RutaPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
