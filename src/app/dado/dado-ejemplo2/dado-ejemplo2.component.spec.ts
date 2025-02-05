import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoEjemplo2Component } from './dado-ejemplo2.component';

describe('DadoEjemplo2Component', () => {
  let component: DadoEjemplo2Component;
  let fixture: ComponentFixture<DadoEjemplo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadoEjemplo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadoEjemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
