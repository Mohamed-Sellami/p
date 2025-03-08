import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule, RouterLink,  } from '@angular/router';
import { RisingStarsComponent } from '../elements/rising-stars/rising-stars.component';
import {  FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, RouterLink,CommonModule,ReactiveFormsModule,RisingStarsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  currentYear: number = new Date().getFullYear();

  
  ngOnInit(): void {
  }




  submitted = false

  contactInfo = {
    email: "sellami.0118.mohamed@gmail.com",
    phone: "+216 22902730",
    address: "Rue belle vue, Manzel Jamil, Bizerte (Tunisie) 7080",
  }
  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]],
    })
  }

  onSubmit() {
    this.submitted = true

    if (this.contactForm.valid) {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", this.contactForm.value)

      // Reset form after submission
      this.contactForm.reset()
      this.submitted = false

      // Show success message (in a real app, you'd handle this better)
      alert("Message sent successfully!")
    }
  }
}

