import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussiaCupComponent } from './russia-cup.component';

describe('RussiaCupComponent', () => {
  let component: RussiaCupComponent;
  let fixture: ComponentFixture<RussiaCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussiaCupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RussiaCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
