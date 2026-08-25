import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    const idioma = localStorage.getItem('idioma') || 'es';
    this.translate.use(idioma);
  }

  cambiarIdioma(idioma: 'es' | 'fr') {
    this.translate.use(idioma);
    localStorage.setItem('idioma', idioma);
  }

}
