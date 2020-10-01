import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.page.html',
  styleUrls: ['./detalhe-produto.page.scss'],
})
export class DetalheProdutoPage implements OnInit {
animal = [
  {id: 1, nome: "Arroz", idade: 'arroz lorem ipsum lorem ipsumlorem ipsum', porte: "Médio", cor:"Caramelo", raca:"Misto", sexo:"Macho", observacao:"Castrado"},
  {id: 2, nome: "Felix", idade: '1 mes', porte: "Pequeno", cor:"Laranja", raca:"Misto", sexo:"Macho", observacao:"Castrado"},]
  constructor() { }

  ngOnInit() {
  }

}
