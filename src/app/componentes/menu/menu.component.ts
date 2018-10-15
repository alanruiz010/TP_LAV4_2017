import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
      this.router.navigate(['/Juegos/AdivinaMasListado']);
    break;
  case 'Agilidad':
      this.router.navigate(['/Juegos/AgilidadaMasListado']);
    break;
  case 'Anagrama':
      this.router.navigate(['/Juegos/AnagramaMasListado']);
    break;
  case 'PPT':
      this.router.navigate(['/Juegos/PPTijeraMasListado']);
    break;
    case 'tateti':
    this.router.navigate(['/Juegos/tateti']);
  break;
    }
  }

}
