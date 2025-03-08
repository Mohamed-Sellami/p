import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule, RouterLink,  } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RisingStarsComponent } from '../elements/rising-stars/rising-stars.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule, RouterLink, RisingStarsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      "title": "Creative Branding & UI/UX Design",
      "category": "Graphic & UI/UX Design",
      "period": "2024",
      "description": "Developed visually appealing brand identities and user-friendly interfaces during an internship at a design agency.",
      "technologies": ["Adobe Photoshop", "Adobe Illustrator", "Figma", "UI/UX Design", "Brand Identity"],
      "image": "/assets/Projects/Design.jpeg"
    },
    {
      title: "Computer Hardware Repair Service",
      category: "IT Maintenance",
      period: "2023",
      description:
        "Developed a systematic approach to computer hardware diagnostics and repair during internship at Technica.",
      technologies: ["Hardware Diagnostics", "Component Replacement", "System Configuration", "Technical Support"],
      image: "/assets/Projects/Repair.jpeg",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Graphic Design",
      period: "2022",
      description: "Created comprehensive visual identity and marketing materials for clients at Viore Digital.",
      technologies: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity", "Social Media Graphics"],
      image: "/assets/Projects/Campain.jpeg",
    },
   
  ]
}

