import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDeleteModalComponent } from './usuario-delete-modal.component';

describe('UsuarioDeleteModalComponent', () => {
  let component: UsuarioDeleteModalComponent;
  let fixture: ComponentFixture<UsuarioDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
