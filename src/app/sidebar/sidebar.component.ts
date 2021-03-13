import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar: any[] = []

  show:boolean = true

  constructor() {
    this.sidebar = [
      {
        id: 0,
        name: "Dashboard",
        path: './assets/sidebar/chart-line-solid.svg'
      },
      {
        id: 1,
        name: "Campañas",
        path: './assets/sidebar/bullhorn-solid.svg'
      },
      {
        id: 2,
        name: "Pacientes",
        path: './assets/sidebar/user-friends-solid.svg'
      },
      {
        id: 3,
        name: "Programas",
        path: './assets/sidebar/chart-bar-solid.svg'
      },
      {
        id: 4,
        name: "Monitoreo",
        path: './assets/sidebar/map-marked-alt-solid.svg'
      },
      {
        id: 5,
        name: "Reportes y Estadisticas",
        path: './assets/sidebar/list-alt-regular.svg'
      }
    ]
   }

  ngOnInit(): void {
  }

}
