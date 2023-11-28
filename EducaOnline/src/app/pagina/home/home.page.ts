import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  empresaNome: string = 'Educação Online';
  historico: string = 'A Educação Online teve origens no ensino a distância por correspondência no século XIX. A partir dos anos 2000, com o avanço da internet, surgiram plataformas de aprendizado online. A década de 2010 testemunhou a popularização dos MOOCs, democratizando o acesso à educação. Na década de 2020, a integração de tecnologias emergentes impulsionou a personalização do aprendizado.';
  objetivos: string = 'Os objetivos da Educação Online abrangem a busca por acessibilidade global, promovendo a igualdade de oportunidades educacionais. Busca-se também a inovação tecnológica, utilizando ferramentas para otimizar métodos de ensino. A flexibilidade e personalização são metas, visando atender às necessidades diversas dos alunos. A promoção da colaboração internacional entre estudantes de diferentes culturas é uma prioridade, enquanto a transformação do paradigma educacional, ultrapassando fronteiras geográficas e tradições, representa o cerne desses objetivos para o presente e futuro.';
  contato: string = 'Email p/contato: online@educa.br';
  tema: string = 'Educação Online: Conectando o Mundo ao Conhecimento, Rompendo Barreiras Geográficas e Adaptando-se às Necessidades Individuais dos Alunos.';

  destaques: string[] = [
    'Transformação Educacional Global',
    'A ascensão da educação online representa uma transformação significativa no paradigma educacional global. Ao possibilitar o acesso amplo e flexível ao conhecimento, a educação online quebra barreiras geográficas, democratizando o aprendizado para pessoas de diversas origens.',

    'Diversidade de Perspectivas',
    'Outra informação relevante é a ênfase na colaboração e na diversidade de perspectivas proporcionadas pela educação online. Plataformas interativas e fóruns de discussão conectam estudantes de todo o mundo, enriquecendo a experiência de aprendizado com uma variedade de visões culturais e acadêmicas.',

    'Flexibilidade para o Futuro',
    'Destaque adicional vai para a flexibilidade inerente à educação online. Esta modalidade de ensino adapta-se aos ritmos de vida contemporâneos, permitindo que os alunos personalizem seus horários de estudo. Essa flexibilidade é crucial para atender às demandas da sociedade moderna, onde as obrigações profissionais e pessoais variam amplamente.',
  ];

  constructor() { }

  ngOnInit() {
  }

}
