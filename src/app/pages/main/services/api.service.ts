import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string) {
    return this.http.post('/php-handlers/mail.php', {
      name: name,
      email: email,
      message: message
    });
  }
}
