import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {




  skills = [
    { category: "Languages", items: ["French", "English"] },
    {
      category: "Software",
      items: ["Word", "Access", "Excel", "PowerPoint", "OkGestCom", "Microsoft Visual Studio", "Blender", "GLPI"],
    },
    {
      category: "Technical Skills",
      items: [
        "General accounting",
        "Client and supplier accounts",
        "Payroll",
        "Billing",
        "Bank reconciliation",
        "Inventory management",
        "Customer service",
        "Sales reporting",
        "Database creation and management",
        "Commercial activities",
        "Hardware and software installation",
        "IT troubleshooting",
        "Problem solving",
      ],
    },
  ]
}

