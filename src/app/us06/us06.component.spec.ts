import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Us06Component } from './us06.component';

describe('Us06Component', () => {
  let component: Us06Component;
  let fixture: ComponentFixture<Us06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Us06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Us06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
