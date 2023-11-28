import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {

  frmData={
    nome:"",
    email:"",
    login: "",
    senha: "",
    }

  constructor() { }

  ngOnInit() {
  }

  cadastro() {
    axios.post('http://localhost/usuarios.php', this.frmData)
    .then(
    (response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    })
 }
}
