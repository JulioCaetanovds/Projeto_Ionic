import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.page.html',
  styleUrls: ['./portifolio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PortifolioPage implements OnInit {

  categorias: string[] = ['Tecnonogias', 'Artes'];

  galeria: any[] = [
    { categoria: 'Tecnonogias', imagem: 'assets/ads.webp', descricao: 'Música' },
    { categoria: 'Artes', imagem: 'assets/musica.webp', descricao: 'Análise e Desenvolvimento de Sistemas' },
  ];

  categoriaSelecionada: string = 'Todos';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
}
