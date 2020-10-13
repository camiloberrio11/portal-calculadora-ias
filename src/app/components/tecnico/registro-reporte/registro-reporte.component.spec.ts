import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReporteComponent } from './registro-reporte.component';

describe('RegistroReporteComponent', () => {
  let component: RegistroReporteComponent;
  let fixture: ComponentFixture<RegistroReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
