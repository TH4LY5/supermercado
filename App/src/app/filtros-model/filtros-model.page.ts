import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/models/Produtos';

@Component({
  selector: 'app-filtros-model',
  templateUrl: './filtros-model.page.html',
  styleUrls: ['./filtros-model.page.scss'],
})
export class FiltrosModelPage implements OnInit {

  produto: Produtos[]
  constructor() { }

  ngOnInit() {
    this.produto = [
      { id: 1, nome: "Arroz", img: "https://apoioentrega.vteximg.com.br/arquivos/ids/450825/10713.jpg", preco: "R$:17,00" },
      { id: 2, nome: "Refrigerante", img: "https://cdn.awsli.com.br/600x450/134/134709/produto/43561261/d17fdd27e4.jpg", preco: "R$:6,50" },
      { id: 3, nome: "Feijão", img: "https://static.carrefour.com.br/medias/sys_master/images/images/hae/h95/h00/h00/9455425683486.jpg", preco: "R$:3,90" },
      { id: 4, nome: "Oleo", img: "https://static.carrefour.com.br/medias/sys_master/images/images/h5e/h2a/h00/h00/9445789335582.jpg", preco: "R$:5,90" },
      { id: 5, nome: "Açucar", img: "https://castronaves.vteximg.com.br/arquivos/ids/212659-1000-1000/11689_01.jpg?v=637019218696630000", preco: "R$:10,50" },

    ]
  }

}
