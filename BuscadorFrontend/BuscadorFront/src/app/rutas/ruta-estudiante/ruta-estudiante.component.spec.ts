import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEstudianteComponent } from './ruta-estudiante.component';

describe('RutaEstudianteComponent', () => {
  let component: RutaEstudianteComponent;
  let fixture: ComponentFixture<RutaEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
