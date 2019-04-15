import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEstudianteConvenioComponent } from './ruta-estudiante-convenio.component';

describe('RutaEstudianteConvenioComponent', () => {
  let component: RutaEstudianteConvenioComponent;
  let fixture: ComponentFixture<RutaEstudianteConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEstudianteConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEstudianteConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
