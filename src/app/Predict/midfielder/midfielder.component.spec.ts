import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidfielderComponent } from './midfielder.component';

describe('MidfielderComponent', () => {
  let component: MidfielderComponent;
  let fixture: ComponentFixture<MidfielderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidfielderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidfielderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
