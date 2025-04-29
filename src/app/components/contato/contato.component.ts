/*import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}*/

import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  sendEmail(event: Event) {
    event.preventDefault(); // Impede o recarregamento da página

    emailjs.sendForm(
      'service_py4k57r',     // ex: service_ab12cd
      'template_t388fds',    // ex: template_123xyz
      event.target as HTMLFormElement,
      'kFn3AzFgG-SDifJKi'      // ex: 7ZxH8abcXxY123
    ).then(() => {
      alert('Mensagem enviada com sucesso!');
    }).catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    });
  }
}
