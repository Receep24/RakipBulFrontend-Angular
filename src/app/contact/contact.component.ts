import { Component } from '@angular/core';
import { MailRequest } from 'src/core/models/request/mail-request-model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mailRequest: MailRequest = new MailRequest();
  message: string | null = null;

  name: string = '';
  surname: string = '';
  email: string = '';
  mailMessage: string = '';

  constructor(private apiService: ApiService) {}

  sendEmail() {
    this.mailMessage = ` 
    Ad: ${this.name}
    Soyad: ${this.surname}
    E-posta: ${this.email}
  
    Kullanıcıdan gelen Mesaj:
    ${this.mailMessage}
  
    Bu mail ${this.name} ${this.surname} tarafından gönderildi.`;

    if (this.email && this.name && this.surname) {
      this.mailRequest.recepients = 'rakipbul843@gmail.com'; // Alıcı e-posta adresi
      this.mailRequest.mail = this.mailMessage; // E-posta mesajı
      this.mailRequest.subject = `${this.name} ${this.surname} adlı kişiden mesaj`; // E-posta konusu

      this.apiService.mailSender(this.mailRequest).subscribe(
        (response) => {
          console.log('E-posta gönderildi:', response);
          this.message = 'E-posta başarıyla gönderildi';
        },
        (error) => {
          console.error('E-posta gönderme hatası:', error);
          this.message = 'E-posta gönderme sırasında bir hata oluştu';
        }
      );

      // Formu sıfırla
      this.name = this.surname = this.mailMessage = this.email = '';
    } else {
      this.message = 'Lütfen boş kısımları doldurun';
    }
  }
}
