import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaConveniosComponent } from './ruta-convenios.component';

describe('RutaConveniosComponent', () => {
  let component: RutaConveniosComponent;
  let fixture: ComponentFixture<RutaConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
