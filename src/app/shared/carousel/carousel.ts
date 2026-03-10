import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgClass],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit {

  @Input() images: carouselImage[] = [
    {
      imageSrc: "wine_example.png",
      imageAlt: ""
    },
    {
      imageSrc: "familia.png",
      imageAlt: ""
    },
  ];
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
