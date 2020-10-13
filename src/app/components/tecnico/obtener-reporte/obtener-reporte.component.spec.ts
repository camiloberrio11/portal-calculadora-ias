import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerReporteComponent } from './obtener-reporte.component';

describe('ObtenerReporteComponent', () => {
  let component: ObtenerReporteComponent;
  let fixture: ComponentFixture<ObtenerReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
