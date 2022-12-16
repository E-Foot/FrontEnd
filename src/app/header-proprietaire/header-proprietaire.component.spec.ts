import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProprietaireComponent } from './header-proprietaire.component';

describe('HeaderProprietaireComponent', () => {
  let component: HeaderProprietaireComponent;
  let fixture: ComponentFixture<HeaderProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProprietaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
