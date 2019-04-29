import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private api: ApiService) {}

  sendEmail(name: string, email: string, message: string) {
    return this.api.sendEmail(name, email, message);
  }
}
