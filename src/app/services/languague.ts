import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private title: Title,
    private meta: Meta
  ) { }

  cambiarIdioma(idioma: 'es' | 'fr') {
    this.translate.use(idioma);
    localStorage.setItem('idioma', idioma);

    this.document.documentElement.lang = idioma;

    if (idioma === 'es') {
      this.title.setTitle('Viña Philippe de Conti | Vinos de Alta Gama');

      this.meta.updateTag({
        name: 'description',
        content: 'Descubre Viña Philippe de Conti, vinos boutique de alta gama que unen la elegancia francesa con el terroir único de Apalta, Chile.'
      });
    }

    if (idioma === 'fr') {
      this.title.setTitle('Viña Philippe de Conti | Vins Haut de Gamme');

      this.meta.updateTag({
        name: 'description',
        content: 'Découvrez Viña Philippe de Conti, des vins boutique haut de gamme qui unissent l’élégance française au terroir unique d’Apalta, au Chili.'
      });
    }

    //this.actualizarHreflang();
  }

  obtenerIdioma(): 'es' | 'fr' {
    return (localStorage.getItem('idioma') as 'es' | 'fr') || 'es';
  }

  private actualizarHreflang() {
    const head = this.document.head;

    head.querySelectorAll('link[data-hreflang]').forEach(link => {
      link.remove();
    });

    const baseUrl = window.location.origin;

    const es = this.document.createElement('link');
    es.rel = 'alternate';
    es.hreflang = 'es';
    es.href = `${baseUrl}/es`;
    es.setAttribute('data-hreflang', 'true');

    const fr = this.document.createElement('link');
    fr.rel = 'alternate';
    fr.hreflang = 'fr';
    fr.href = `${baseUrl}/fr`;
    fr.setAttribute('data-hreflang', 'true');

    head.appendChild(es);
    head.appendChild(fr);
  }

}
