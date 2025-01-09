import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public arrayName: string[] = ['ironman','superman','spiderman','hulk','viuda negra'];
  public arrayAge: number[] = [45,30,19,35,24];

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {

    return `${this.name} - ${ this.age }`;
  }

  changeHero():void {

    for (let index = 0; index < this.arrayName.length; index++) {
      if (this.name === this.arrayName[index]){
        this.name = this.arrayName[index +1];
        break;
      }
    }
  }

  changeAge():void {
    for (let index = 0; index < this.arrayAge.length; index++) {
      if (this.age === this.arrayAge[index]){
        this.age = this.arrayAge[index +1];
        break;
      }
    }
  }

  resetForm():void{
    this.name = this.arrayName[0];
    this.age = this.arrayAge[0];
  }
}
