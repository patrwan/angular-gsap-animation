import { AfterViewInit, Component, inject } from '@angular/core';
import { Carousel } from '../../../../shared/carousel/carousel';
import { Router, RouterLink } from '@angular/router';
import vinos from '../../../../../assets/db.json';

@Component({
  selector: 'app-featured-products',
  imports: [Carousel, RouterLink],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts implements AfterViewInit {

  productos = vinos;

  ngAfterViewInit(): void {
    /* gsap.from('.product-item', {
      translateY: '100',
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.6,
      stagger: 0.25,

      scrollTrigger: {
        markers: true,
        scrub: 3,
        trigger: '.product-container',
        start: 'top center',
        end: '+=150',

      }
    }); */
  }

  private router = inject(Router);

  testNavegacion() {
    this.router.navigate(['/vinos', 1])
      .then(ok => console.log('¿Navegó bien?:', ok))
      .catch(err => console.error('Error fatal al navegar:', err));
  }

}
