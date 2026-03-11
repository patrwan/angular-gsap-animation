import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;

  ctx!: gsap.Context;
  tl!: GSAPTimeline;
  open = false;

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

  toggleMenu() {
    this.open ? this.tl.reverse() : this.tl.play();
    this.open = !this.open;
  }

  ngOnDestroy() {
    this.ctx.revert();
  }




}
