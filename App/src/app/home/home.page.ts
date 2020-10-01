import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosModelPage } from '../filtros-model/filtros-model.page';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto.page';
import { Patrocinio } from 'src/models/Patrocinio';
import { Router } from '@angular/router';
import { Produtos } from 'src/models/Produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  patro: Patrocinio[]
  produto: Produtos[]
  slideOpt;
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.patro = [
      { id: 1, nome: "Bicho Vivo", img: "https://lh3.googleusercontent.com/proxy/NbX5YLEfNetUjqaTvRbSiYFR2Y3_sk-j51x_JVwv3GtVxYMsgZIE0pW6QKK0xgJzZX3Z0kegrJL2pkOEWxWVcxecwbnDOmzaWOZFvK481YjyxLsQtKnEiCkUZTejoa6eRilSweW06cMaF2jELBN_hmqzQU4", link: "link site ou rede" },
      { id: 2, nome: "Cat Dog", img: "https://lh3.googleusercontent.com/proxy/NbX5YLEfNetUjqaTvRbSiYFR2Y3_sk-j51x_JVwv3GtVxYMsgZIE0pW6QKK0xgJzZX3Z0kegrJL2pkOEWxWVcxecwbnDOmzaWOZFvK481YjyxLsQtKnEiCkUZTejoa6eRilSweW06cMaF2jELBN_hmqzQU4", link: "link site ou rede" },
      { id: 3, nome: "Auquimia", img: "https://lh3.googleusercontent.com/proxy/NbX5YLEfNetUjqaTvRbSiYFR2Y3_sk-j51x_JVwv3GtVxYMsgZIE0pW6QKK0xgJzZX3Z0kegrJL2pkOEWxWVcxecwbnDOmzaWOZFvK481YjyxLsQtKnEiCkUZTejoa6eRilSweW06cMaF2jELBN_hmqzQU4", link: "link site ou rede" },
      { id: 4, nome: "SOS Minas Pet", img: "https://lh3.googleusercontent.com/proxy/NbX5YLEfNetUjqaTvRbSiYFR2Y3_sk-j51x_JVwv3GtVxYMsgZIE0pW6QKK0xgJzZX3Z0kegrJL2pkOEWxWVcxecwbnDOmzaWOZFvK481YjyxLsQtKnEiCkUZTejoa6eRilSweW06cMaF2jELBN_hmqzQU4", link: "link site ou rede" },
      { id: 5, nome: "Shopping Rural", img: "https://lh3.googleusercontent.com/proxy/NbX5YLEfNetUjqaTvRbSiYFR2Y3_sk-j51x_JVwv3GtVxYMsgZIE0pW6QKK0xgJzZX3Z0kegrJL2pkOEWxWVcxecwbnDOmzaWOZFvK481YjyxLsQtKnEiCkUZTejoa6eRilSweW06cMaF2jELBN_hmqzQU4", link: "link site ou rede" },
  
    ]
    this.produto = [
      { id: 1, nome: "Arroz", img: "https://apoioentrega.vteximg.com.br/arquivos/ids/450825/10713.jpg", preco: "R$:17,00"  },
      { id: 2, nome: "Refrigerante", img: "https://cdn.awsli.com.br/600x450/134/134709/produto/43561261/d17fdd27e4.jpg",  preco: "R$:6,50"},
      { id: 3, nome: "Feijão", img: "https://static.carrefour.com.br/medias/sys_master/images/images/hae/h95/h00/h00/9455425683486.jpg",  preco: "R$:3,90"},
      { id: 4, nome: "Oleo", img: "https://static.carrefour.com.br/medias/sys_master/images/images/h5e/h2a/h00/h00/9445789335582.jpg",  preco: "R$:5,90"},
      { id: 5, nome: "Açucar", img: "https://castronaves.vteximg.com.br/arquivos/ids/212659-1000-1000/11689_01.jpg?v=637019218696630000",  preco: "R$:10,50"},
  
    ]
    this.slideOpt = {
      loop: true,
      autoplay:true,
      slidesPerView: 'auto',
      zoom: false,
      grabCursor: true,
    };
  }


  async abrirFiltro() {

    let modal = await this.modalCtrl.create({
      component: FiltrosModelPage,
      // cssClass: 'cart-model'
    });

    modal.present();

  }

  todos(){
    this.router.navigate(['/lista-todos'])
  }

  async abriDescricao() {

    let modal = await this.modalCtrl.create({
      component: DetalheProdutoPage,
      // cssClass: 'cart-model'
    });

    modal.present();
  }

}
