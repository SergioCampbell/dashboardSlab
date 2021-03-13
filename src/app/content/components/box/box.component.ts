import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss', '../../content.component.scss']
})
export class BoxComponent implements OnInit {

  campaign1: any[] = [];
  campaign2: any[] = [];
  campaign3: any[] = [];
  user1: any[] = [(Math.floor(Math.random() * 100 + 1))]
  user2: any[] = [(Math.floor(Math.random() * 100 + 1))]
  user3: any[] = [(Math.floor(Math.random() * 100 + 1))]
  dateIn = new Date().getTimezoneOffset();
  dateOut = new Date();
  dateIn2 = new Date().getTimezoneOffset();
  dateOut2 = new Date();
  dateIn3 = new Date().getTimezoneOffset();
  dateOut3 = new Date();

  constructor() { 

    this.campaign1 = [
      {id: 0, titulo: 'Notificación vacunas #3',
      estatus: 'Programada', tipo: 'Promoción',
      usuarios: this.user1, ingreso: this.dateIn, egreso: this.dateOut },      
    ]

    this.campaign2 = [
      {id: 1, titulo: 'Envio de sms usuarios',
      estatus: 'Completada', tipo: 'Promoción',
      usuarios: this.user2, ingreso: this.dateIn2, egreso: this.dateOut2 },      
    ]

    this.campaign3 = [      
      {id: 2, titulo: 'Correo celular apagado',
      estatus: 'Completada', tipo: 'Promoción',
      usuarios: this.user3, ingreso: this.dateIn3, egreso: this.dateOut3 },
    ]
  }

  ngOnInit(): void {
  }

}
