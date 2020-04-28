import { Component, OnInit } from '@angular/core';

// Serviço de acesso à API
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

  // Variavel que indentifica se temos usuários
  noUsers = false;

  // Variavel com a array de usuário obtidos
  data: Array<any> = [];

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {

    // Obtendo os dados da API
    this.UsersService.getUsers().subscribe((res: any) => {
      // Se obteve os dados com sucesso
      if (res.status === 'success') {

        // Loop para descartar usuário  removidos
        res.result.forEach((value) => {

          if(value !== null) {
            this.data.push(value);
          }
        });

        // Se não existem usuários
        if (this.data.length === 0) {
          this.noUsers = true;
        }



// Se falhou ao acessar a API

      } else {
       console.error('Falha no acesso a API.');
      }
    });

  }

}
