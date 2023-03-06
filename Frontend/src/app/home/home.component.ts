import {Component} from '@angular/core';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {IMenuOption, IUserSession} from "../lista-pedidos/lista-pedidos.model";
import {BreakpointObserver} from "@angular/cdk/layout";
import * as moment from 'moment';
import { Router } from '@angular/router';
moment.locale("es");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected readonly faBars = faBars;
  protected readonly faXmark = faXmark;
  protected phoneMenuShow = false;
  protected readonly optionsMenu: IMenuOption[] = [];
  protected readonly deviceIsDesktop;

  constructor(
      protected readonly breakpointObserver: BreakpointObserver,
      private readonly router: Router
  ) {
      this.deviceIsDesktop = this.breakpointObserver.isMatched('(min-width: 1024px)');

      this.optionsMenu.push({
          menuId: 1,
          title: "Configuración",
          callback: () => {
            this.router.navigate(['/createUser']).then();
          }
          /* No sé agre la propiedad iconUrl porque no se va a utilizar en esta etapa, si se requiere se debe agregar una url válida*/
      });

      this.optionsMenu.push({
          menuId: 2,
          title: "Pedidos",
          callback: () => {
            this.router.navigate(['/pedidos']).then();
          }
      });

      this.optionsMenu.push({
          menuId: 3,
          title: "Inventarios",
          callback: () => {}
      });

      this.optionsMenu.push({
          menuId: 4,
          title: "Traslados",
          callback: () => {}
      });

      this.optionsMenu.push({
          menuId: 5,
          title: "Deterioros",
          callback: () => {}
      });

      this.optionsMenu.push({
          menuId: 6,
          title: "Compras",
          callback: () => {}
      });

      this.optionsMenu.push({
          menuId: 7,
          title: "Aprobaciones",
          callback: () => {}
      });
  }

  onHome(){
    this.router.navigate(['/']).then();
  }
}

