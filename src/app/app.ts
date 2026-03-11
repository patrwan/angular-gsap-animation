import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { gsap } from "gsap";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from 'gsap/SplitText';

import { NgZone } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { FeaturedProducts } from './features/landing/components/featured-products/featured-products';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FeaturedProducts, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('angular-gsap-animation');

  private smoother!: ScrollSmoother;

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

      this.smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
      });

      const links = document.querySelectorAll('li');

      links.forEach(link => {

        link.onclick = () => {
          this.smoother.scrollTo("#" + link.id + '1', true, "top");
        }
      })

      const heroSplit = new SplitText('#hero-title', { type: 'chars, words, lines' });
      const heroSubTtileSplit = new SplitText('#hero-subTitle', { type: 'lines' });

      gsap.from('#hero-title', {
        yPercent: 0,
        ease: 'power4.out',
        autoAlpha: 0,
        duration: 4

      });

      gsap.from('#hero-subTitle', {
        opacity: 0,
        duration: 2,
        delay: 0.2
      });

      gsap.from('#hero-button', {
        opacity: 0,
        y: 10,
        delay: 0.5,
        clearProps: "transform"
      })

      gsap.from('.nav', {
        opacity: 0,
        translateY: - 10,
        delay: 0.5,
        clearProps: "transform"
      })



    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#historia1",
        start: "top-=100 center",
        end: "+=100",
        //markers: false,
        pin: false,
        //scrub: 5
      }
    });

    tl.from('#history-title', {
      y: -100,
      autoAlpha: 0,
    })
      .from('#history-text', {
        x: 100,
        autoAlpha: 0,

      }).from('.text', {
        x: 50,
        autoAlpha: 0,

      });
    //.set("#history-title", { display: "none" })
    //.set(".history-image", { display: "block" })
    //.to({}, { duration: 15 });;

    gsap.from('.mission', {
      translateX: '100',
      autoAlpha: 0,
      ease: 'power4.out',
      duration: 2,

      scrollTrigger: {
        markers: true,
        //scrub: 3,
        trigger: '.mission',
        start: 'top-=100 center',
        end: '+=300',

      }
    });

    gsap.from('.vission', {
      translateX: '-100',
      autoAlpha: 0,
      ease: 'power4.out',
      duration: 2,
      scrollTrigger: {
        //markers: true,
        //scrub: 3,
        trigger: '.vission',
        start: 'top-=100 center',
        end: '+=300',

      }
    });

    gsap.from('.value-item', {
      translateY: '100',
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.7,
      stagger: 0.30,

      scrollTrigger: {
        //markers: true,
        //scrub: 3,
        trigger: '.value-container',
        start: 'top center',
        end: '+=150',

      }
    });

    gsap.from('.product-container', {
      translateY: '100',
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 1,

      scrollTrigger: {
        //markers: true,
        //scrub: 3,
        trigger: '.product-container',
        start: 'top-=200 center',
        end: '+=150',

      }
    });

    const tl_products = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".product-container",
        start: "center-=300 center",
        end: "=+200",
        //markers: true,
      }
    });

    tl_products.to('.product-item', {
      backgroundColor: '#00b8db',
      duration: 0.5,
      ease: 'power3.in',

    })
      .to('.product-item-2', {
        backgroundColor: '#fff',
        duration: 0.5,
      })
      .to('.product-item-3', {
        backgroundColor: '#ff2056',
        duration: 0.5,
      });

    /*  const tl_products_2 = gsap.timeline({
       paused: true,
       scrollTrigger: {
         trigger: ".product-container",
         start: "center+=150 center",
         end: "=+100",
         markers: true,
 
       }
     });
 
     tl_products_2.to('.product-item-4-a', {
       backgroundColor: '#00b8db',
       duration: 0.5,
       ease: 'power3.in',
       clearProps: ""
 
     }, 0)
       .to('.product-item-4-b', {
         backgroundColor: '#ff2056',
         duration: 0.5,
         ease: 'power3.in'
       }, 0)
 
       .to('.product-item-5', {
         backgroundColor: '#ff2056',
         duration: 0.5,
       })
       .to('.product-item-6', {
         backgroundColor: '#ff2056',
         duration: 0.5,
       }); */

    /* gsap.from('.product-item', {
      translateY: '200',
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 1,
      onUpdate: () => {
        console.log('sisisis')
      },

      scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '.product-container',
        start: 'top center',
        end: '+=150',
        onEnter: () => {
          console.log("hola")
        }

      }
    }); */

    /* let sections = gsap.utils.toArray(".panel");
    const container = gsap.timeline({});
 */

    /* gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (document.querySelector('#container')! as HTMLElement).offsetWidth
      }
    }); */


    const menuTl = gsap.timeline({ paused: true })
      .to('#mobile-menu', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
        pointerEvents: "auto"
      });

    var actionNav = gsap.to('.nav', { y: '-=96', duration: 0.5, ease: 'power2.in', paused: true });

    ScrollTrigger.create({
      trigger: ".nav",
      start: "10px top",
      end: 99999,
      onUpdate: ({ progress, direction, isActive }) => {
        if (direction == -1) {
          actionNav.reverse()
        } if (direction == 1) {
          actionNav.play()
        } else if (direction == 1 && isActive == true) {
          actionNav.play()
        }
      }
    });

  }













  scroll() {
    gsap.to(this.smoother, {
      scrollTop: this.smoother.offset(".club-banner", 'center -1900px'),
      duration: 3,
    })
  }

  public toggleMenu() {

  }




}
