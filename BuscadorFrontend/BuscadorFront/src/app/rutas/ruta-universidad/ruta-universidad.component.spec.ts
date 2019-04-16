import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUniversidadComponent } from './ruta-universidad.component';

describe('RutaUniversidadComponent', () => {
  let component: RutaUniversidadComponent;
  let fixture: ComponentFixture<RutaUniversidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUniversidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
