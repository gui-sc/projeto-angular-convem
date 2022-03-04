import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  valorAtual:any;
  valorSalvo:any;
  isMouseOver: boolean = false;
  num: number = 45;
  title: string = `Interpolações ${this.num}`;
  booleana = false;
  nome: any = "";

  pessoa={
    nome:'Guilherme',
    idade:18
  }

  urlImagem = 'http://lorempixel.com.br/400/200';
  getValor() {
    if (this.booleana) {
      return 900;
    }else{
      return 2;
    }
  }

  clique(){
    alert('hello world!');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento:any){
    console.log(evento);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
