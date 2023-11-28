import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  username: string = ''; // Adicione o login padrão aqui
  password: string = ''; // Adicione a senha padrão aqui


  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    // Verifica se as credenciais inseridas correspondem às credenciais padrão
    const isValid = this.username === 'teste' && this.password === 'teste123';

    if (isValid) {
      // Redireciona para a página /home após o login
      this.router.navigate(['/home']);
    } else {
      // Exibir mensagem de erro, se necessário
      console.log('Credenciais inválidas');
    }
  }
}
