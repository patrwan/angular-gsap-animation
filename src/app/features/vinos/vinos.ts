import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../layout/navbar/navbar";
import vinos from '../../../assets/db.json';

@Component({
  selector: 'app-vinos',
  imports: [Navbar],
  templateUrl: './vinos.html',
  styleUrl: './vinos.css',
})
export class Vinos implements OnInit {
  private route = inject(ActivatedRoute);

  id: number = Number(this.route.snapshot.paramMap.get('id'));

  winesList = vinos;

  wineDetail: Wine | undefined = {
    id: 0,
    name: '',
    short_name: '',
    description: '',
    image: '',
    detail_image: ''
  };

  ngOnInit(): void {
    this.wineDetail = this.winesList.find(wine => wine.id == this.id);
  }
}

interface Wine {
  id: number;
  name: string;
  short_name: string;
  description: string;
  image: string;
  detail_image: string;
}
