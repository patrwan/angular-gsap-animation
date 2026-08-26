import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

import { Router } from '@angular/router';

import { TranslatePipe } from '@ngx-translate/core';

import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from './../../services/languague';

import { gsap } from "gsap";

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;

  ctx!: gsap.Context;
  tl!: GSAPTimeline;
  open = false;

  idiomaActual = localStorage.getItem('idioma') || 'es';

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.open) {
      this.open ? this.tl.reverse() : this.tl.play();
      this.open = !this.open;
    }
  }
  ngAfterViewInit(): void {
    this.ctx = gsap.context((self) => {

      const items = self.selector?.(".item");

      this.tl = gsap.timeline({ paused: true })
        .from(this.menu.nativeElement, {
          opacity: 0,
          y: -40,
          duration: 0.15
        })
        .from(items, {
          opacity: 0,
          y: -8,
          stagger: 0.03,
          duration: 0.12
        }, "-=0.08");

    }, this.menu);




  }

  constructor(private Languague: LanguageService, private router: Router) { }

  cambiarIdioma(idioma: 'es' | 'fr') {
    this.Languague.cambiarIdioma(idioma);
    this.idiomaActual = idioma;
    //this.router.navigate(['/' + idioma]);
  }

  toggleMenu() {
    this.open ? this.tl.reverse() : this.tl.play();
    this.open = !this.open;
  }

  ngOnDestroy() {
    this.ctx.revert();
  }




}
