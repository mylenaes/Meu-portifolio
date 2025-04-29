import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  scrollToContato() {
    const elemento = document.getElementById('contato');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}