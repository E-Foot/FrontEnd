import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquageComponent } from './bloquage.component';

describe('BloquageComponent', () => {
  let component: BloquageComponent;
  let fixture: ComponentFixture<BloquageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloquageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloquageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
