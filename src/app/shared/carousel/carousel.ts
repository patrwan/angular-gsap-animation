import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  id: number,
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
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
      id: 1,
      imageSrc: "wines/wine-closdeconti.webp",
      imageAlt: "",
      title: "Clos de Conti",
      description: ""
    },
    {
      id: 2,
      imageSrc: "wines/wine-premier-cru.webp",
      imageAlt: "",
      title: "Premier Cru",
      description: ""
    },
    {
      id: 3,
      imageSrc: "wines/wine-grand-cru.webp",
      imageAlt: "",
      title: "Grand Cru",
      description: ""
    }

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
