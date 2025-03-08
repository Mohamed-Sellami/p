import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRotationComponent } from './text-rotation.component';

describe('TextRotationComponent', () => {
  let component: TextRotationComponent;
  let fixture: ComponentFixture<TextRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
