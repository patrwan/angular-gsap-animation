import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import vinos from '../../../../src/assets/db.json';

interface carouselImage {
  id: number,
  name: string;
  short_name: string;
  description: string;
  image: string;
  detail_image: string
}



@Component({
  selector: 'app-carousel',
  imports: [NgClass],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit {

  @Input() images: carouselImage[] = vinos
  @Input() indicators = true;

  @Input() controls = true;

  public selectedIndex = 0;

  ngOnInit(): void {

  }

  public selectImage(index: number) {
    this.selectedIndex = index;
  }

  public onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  public onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
