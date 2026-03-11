import { AfterViewInit, Component } from '@angular/core';
import { Carousel } from '../../../../shared/carousel/carousel';

@Component({
  selector: 'app-featured-products',
  imports: [Carousel],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts implements AfterViewInit {

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

}
