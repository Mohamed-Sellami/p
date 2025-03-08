import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Star {
  id: number;
  size: number;
  x: number;
  duration: number;
}

@Component({
  selector: 'app-rising-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rising-stars.component.html',
  styleUrls: ['./rising-stars.component.scss']
})
export class RisingStarsComponent implements OnInit, OnDestroy {
  stars: Star[] = [];
  nextId = 0;
  interval: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Only execute client-side code if running in a browser
    if (this.isBrowser) {
      // Create initial stars
      for (let i = 0; i < 10; i++) {
        this.createStar();
      }

      // Add new stars periodically
      this.interval = setInterval(() => {
        this.createStar();
        
        // Remove old stars to prevent array from growing too large
        if (this.stars.length > 50) {
          this.stars.shift();
        }
      }, 1500);
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  createStar(): void {
    // Safe access to window
    const windowWidth = this.isBrowser ? window.innerWidth : 1000; // Default fallback width
    
    this.stars.push({
      id: this.nextId++,
      size: Math.floor(Math.random() * 3) + 1, // Random size between 1-3px
      x: Math.floor(Math.random() * windowWidth), // Random horizontal position
      duration: Math.random() * 10 + 15 // Random duration between 15-25s
    });
  }
}