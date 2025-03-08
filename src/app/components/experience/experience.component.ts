import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import 'intersection-observer';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
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
        { threshold: 0.1 } // Element becomes visible when 10% of it enters the viewport
      );

      // Observe all elements with the 'timeline-event' class
      const timelineElements = document.querySelectorAll('.timeline-event');
      timelineElements.forEach((el: any) => {
        observer.observe(el);
      });
    }
  }
  
  experiences = [
    // Your experiences array remains unchanged
    {
      title: "Technician in Infrastructure & Systems",
      company: "ATTIJERI BANK",
      location: "Ariana, Tunisia",
      period: "2024",
      type: "Internship",
      responsibilities: [
        "Infrastructure system maintenance and support",
        "Hardware and software troubleshooting",
        "Network configuration and management",
        "Providing technical support for bank employees",
      ],
    },
    {
      title: "Technician of Computer Repair",
      company: "Technica",
      location: "Bizerte, Tunisia",
      period: "2023",
      type: "Internship",
      responsibilities: [
        "Diagnosing and repairing computer hardware",
        "Replacing and upgrading components",
        "Installing and configuring operating systems",
        "Providing technical support to customers",
      ],
    },
    {
      title: "Graphic Designer",
      company: "Viore Digital",
      location: "Nabeul, Tunisia",
      period: "2021",
      type: "Internship",
      responsibilities: [
        "Creating digital marketing materials",
        "Developing brand identities",
        "UI/UX design for web applications",
        "Designing visual content for social media",
      ],
    },
  ];

  volunteerWork = [
    {
      title: "Director of Communication",
      organization: "CSFMT Club",
      period: "2022 - 2024",
      responsibilities: [
        "Developing external communication strategies",
        "Managing social media platforms",
        "Promoting events and engaging with the community",
      ],
    },
    {
      title: "Member",
      organization: "Manzel Djemil YouthClub",
      period: "2019 - 2020",
      responsibilities: [
        "Participation in community service projects",
        "Organizing and supporting events",
        "Leading youth engagement initiatives",
      ],
    },
  ];
}