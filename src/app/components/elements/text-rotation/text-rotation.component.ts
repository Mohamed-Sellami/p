import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-rotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-rotation.component.html',
  styleUrl: './text-rotation.component.css'
})
export class TextRotationComponent implements OnInit, OnDestroy {
  professions: string[] = [
    'graphic designer',
    'developer',
    'video editor',
    'UI/UX designer',
    'photographer',
    'illustrator'
  ];
  
  currentText: string = this.professions[0];
  currentIndex: number = 0;
  intervalId: any;
  isAnimating: boolean = false;
  
  ngOnInit(): void {
    // Start text rotation
    this.startTextRotation();
  }
  
  ngOnDestroy(): void {
    // Clean up the interval when component is destroyed
    this.stopTextRotation();
  }
  
  startTextRotation(): void {
    this.intervalId = setInterval(() => {
      this.animateTextChange();
    }, 3000); // Change every 3 seconds
  }
  
  stopTextRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  animateTextChange(): void {
    // Step 1: Fade out
    this.isAnimating = true;
    
    // Step 2: After fade out completes, change text and fade in
    setTimeout(() => {
      // Update to next profession
      this.currentIndex = (this.currentIndex + 1) % this.professions.length;
      this.currentText = this.professions[this.currentIndex];
      
      // Fade back in
      this.isAnimating = false;
    }, 500); // This should match the CSS transition duration
  }
}