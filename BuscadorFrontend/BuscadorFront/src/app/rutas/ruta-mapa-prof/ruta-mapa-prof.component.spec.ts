import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMapaProfComponent } from './ruta-mapa-prof.component';

describe('RutaMapaProfComponent', () => {
  let component: RutaMapaProfComponent;
  let fixture: ComponentFixture<RutaMapaProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMapaProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMapaProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
