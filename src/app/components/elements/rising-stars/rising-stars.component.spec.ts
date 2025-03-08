import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisingStarsComponent } from './rising-stars.component';

describe('RisingStarsComponent', () => {
  let component: RisingStarsComponent;
  let fixture: ComponentFixture<RisingStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RisingStarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RisingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
