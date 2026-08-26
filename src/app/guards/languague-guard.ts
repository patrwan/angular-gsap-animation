import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LanguageService } from '../services/languague';

export const languagueGuard: CanActivateFn = (route, state) => {
  const languageService = inject(LanguageService);

  const idioma = route.routeConfig?.path;

  if (idioma === 'es' || idioma === 'fr') {
    languageService.cambiarIdioma(idioma);
  }

  return true;
};
