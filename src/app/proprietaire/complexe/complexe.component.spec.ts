import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';

import { PropComplexeComponent } from './complexe.component';

describe('ComplexeComponent', () => {
  let component: PropComplexeComponent;
  let fixture: ComponentFixture<PropComplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropComplexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropComplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
