import { Component, OnInit } from '@angular/core';
import { Animais } from 'src/models/Animais';
import { ModalController } from '@ionic/angular';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto.page';
import { Produtos } from 'src/models/Produtos';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.page.html',
  styleUrls: ['./lista-todos.page.scss'],
})
export class ListaTodosPage implements OnInit {
  Animais: Animais[]
  produto: Produtos[]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
   // this.listaAnimais(1);
    this.produto = [
      { id: 1, nome: "Arroz", img: "https://apoioentrega.vteximg.com.br/arquivos/ids/450825/10713.jpg", preco: "R$:17,00" },
      { id: 2, nome: "Refrigerante", img: "https://cdn.awsli.com.br/600x450/134/134709/produto/43561261/d17fdd27e4.jpg", preco: "R$:6,50" },
      { id: 3, nome: "Feijão", img: "https://static.carrefour.com.br/medias/sys_master/images/images/hae/h95/h00/h00/9455425683486.jpg", preco: "R$:3,90" },
      { id: 4, nome: "Oleo", img: "https://static.carrefour.com.br/medias/sys_master/images/images/h5e/h2a/h00/h00/9445789335582.jpg", preco: "R$:5,90" },
      { id: 5, nome: "Açucar", img: "https://castronaves.vteximg.com.br/arquivos/ids/212659-1000-1000/11689_01.jpg?v=637019218696630000", preco: "R$:10,50" },

    ]
  }

  listaAnimais(tipo) {
    if (tipo == 1) {
      this.Animais = [
        { id: 1, nome: "Bob", idade: "1 mes", img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg", tipo: 1, sexo: "M", cor: "branco", porte: "medio" },
        { id: 2, nome: "Rex", idade: "1 mes", img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg", tipo: 1, sexo: "M", cor: "branco", porte: "medio" },
        { id: 3, nome: "Bob", idade: "1 mes", img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg", tipo: 1, sexo: "M", cor: "branco", porte: "medio" },
        { id: 4, nome: "Bob", idade: "1 mes", img: "https://amoraospets.com/wp-content/uploads/2019/10/Cavalier-King-Charles-Spaniel.jpg", tipo: 1, sexo: "M", cor: "branco", porte: "medio" }
      ]
    } if (tipo == 2) {
      this.Animais = [
        { id: 1, nome: "Preto", idade: "1 mes", img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg", tipo: 2, sexo: "M", cor: "branco", porte: "medio" },
        { id: 2, nome: "Lulu", idade: "1 mes", img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg", tipo: 2, sexo: "M", cor: "branco", porte: "medio" },
        { id: 3, nome: "Tom", idade: "1 mes", img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg", tipo: 2, sexo: "M", cor: "branco", porte: "medio" },
        { id: 4, nome: "Bob", idade: "1 mes", img: "https://www.loucadosgatos.com/wp-content/uploads/2015/09/Persa-BJ-1-melhor-gato-2014-676x368.jpg", tipo: 2, sexo: "M", cor: "branco", porte: "medio" }
      ]
    }
  }


  async abriDescricao() {

    let modal = await this.modalCtrl.create({
      component: DetalheProdutoPage,
      // cssClass: 'cart-model'
    });

    modal.present();
  }

}
