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

      const heroSplit = new SplitText('#hero-title', { type: 'chars, words, lines' });
      const heroSubTtileSplit = new SplitText('#hero-subTitle', { type: 'lines' });

      gsap.from(heroSplit.lines, {
        yPercent: 0,
        ease: 'power4.out',
        opacity: 0,
        duration: 1

      });

      gsap.from(heroSubTtileSplit.lines, {
        opacity: 0,
        duration: 2,
        stagger: 0.05,
        delay: 0
      });

      gsap.from('#hero-button', {
        opacity: 0,
        y: 10,
        delay: 0.5,
        clearProps: "transform"
      })



    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#history",
        start: "top center",
        end: "+=200",
        markers: true,
        pin: false,
        scrub: 5
      }
    });

    tl.from('#history-title', {
      y: -100,
      opacity: 0,
    })
      .from('#history-text', {
        x: 100,
        opacity: 0,

      }).from('.text', {
        x: 50,
        opacity: 0,

      })
    //.set("#history-title", { display: "none" })
    //.set(".history-image", { display: "block" })

    //.to({}, { duration: 15 });;

    let sections = gsap.utils.toArray(".panel");

    const container = gsap.timeline({

    });


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
