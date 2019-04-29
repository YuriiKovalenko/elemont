import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-main-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  constructor(private mail: EmailService) {}

  status: string;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      realEmail: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
      email: new FormControl(null)
    });
  }

  submit() {
    const formData = this.form.value;
    if (formData.email) return;
    this.mail
      .sendEmail(formData.name, formData.realEmail, formData.message)
      .subscribe(
        data => {
          this.status = data == 11 ? 'success' : 'fail';
        },
        () => {
          this.status = 'fail';
        }
      );
  }
}
