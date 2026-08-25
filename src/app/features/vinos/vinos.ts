import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../layout/navbar/navbar";

@Component({
  selector: 'app-vinos',
  imports: [Navbar],
  templateUrl: './vinos.html',
  styleUrl: './vinos.css',
})
export class Vinos {
  private route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
}
