import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropStadesComponent } from './prop-stades.component';

describe('PropStadesComponent', () => {
  let component: PropStadesComponent;
  let fixture: ComponentFixture<PropStadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropStadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropStadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
