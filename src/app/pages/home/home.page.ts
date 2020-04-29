import { Component, OnInit } from '@angular/core';


import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public navCtr: NavController) { }

  ngOnInit() {
  }
  // Ação do botão listar usuários
  listUsers() {
    this.navCtr.navigateForward('usuarios/todos');
  }

}
