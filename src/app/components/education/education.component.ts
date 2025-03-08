// education.component.ts
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RisingStarsComponent } from '../elements/rising-stars/rising-stars.component';
import 'intersection-observer';

interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  location: string;
  description: string;
}

interface TrainingItem {
  course: string;
  period: string;
  institution: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RisingStarsComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  educationItems: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      period: '2019-2023',
      institution: 'University Name',
      location: 'City, Country',
      description: 'Focused on software engineering, algorithms, and data structures. Participated in various coding competitions and group projects.'
    },
    {
      degree: 'High School Diploma',
      period: '2015-2019',
      institution: 'High School Name',
      location: 'City, Country',
      description: 'Graduated with honors. Participated in science and mathematics clubs.'
    }
  ];

  additionalTraining: TrainingItem[] = [
    {
      course: 'Full Stack Web Development',
      period: '2023',
      institution: 'Online Platform Name',
      location: 'Online',
      description: 'Comprehensive course covering modern front-end and back-end technologies including Angular, Node.js, and MongoDB.'
    },
    {
      course: 'UI/UX Design Fundamentals',
      period: '2022',
      institution: 'Design Academy Name',
      location: 'Online',
      description: 'Learned user research methods, wireframing, prototyping, and usability testing.'
    }
  ];

  ngAfterViewInit() {
    // Only run IntersectionObserver in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // If the element is in the viewport, add the 'visible' class
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        },
        { threshold: 0.2 } // Element becomes visible when 20% of it enters the viewport
      );

      // Observe all elements with the 'timeline-event' class
      const timelineElements = document.querySelectorAll('.timeline-event');
      timelineElements.forEach((el: any) => {
        observer.observe(el);
      });
    }
  }
}