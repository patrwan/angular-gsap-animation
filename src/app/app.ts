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
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-gsap-animation');

  private smoother!: ScrollSmoother;

  constructor(private zone: NgZone) { }







}
