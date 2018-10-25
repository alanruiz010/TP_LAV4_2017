import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import {LoginComponent} from '../login/login.component'
import { FormsModule } from '@angular/forms';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
    listado: Array<any>;

  lado:JuegoServiceService;

 public algo: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
     
    }
  

  ngOnInit() {
   
  }
  llamar()
  {
    this.algo=this.lado.TraerUsuario();
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
