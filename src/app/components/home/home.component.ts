import { Component } from '@angular/core';
import { RouterModule, RouterLink,  } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';
import { TextRotationComponent } from '../elements/text-rotation/text-rotation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,TextRotationComponent, RouterLink,EducationComponent,ExperienceComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
