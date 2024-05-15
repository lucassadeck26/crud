import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarModalComponent } from './usuario-editar-modal.component';

describe('UsuarioEditarModalComponent', () => {
  let component: UsuarioEditarModalComponent;
  let fixture: ComponentFixture<UsuarioEditarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioEditarModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
