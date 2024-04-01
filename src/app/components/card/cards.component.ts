import { itens } from '../../data/itens';
import { Component } from '@angular/core';
import { TItem } from '../../types/itens.type';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  listItem: TItem[] = itens;

  gainMethod() {
    let gain = 0;
    this.listItem.reduce((total, item) => {
      if (item.expense) return gain;
      return (gain = total + item.value);
    }, 0);

    return gain;
  }

  spentMethod() {
    let spent = 0;
    this.listItem.reduce((total, item) => {
      if (!item.expense) return spent;
      return (spent = total + item.value);
    }, 0);

    return spent;
  }

  balanceMethod() {
    let balance = 0;
    let spent = 0;
    let gain = 0;
    this.listItem.reduce((total, item) => {
      if (item.expense) return gain;
      return (gain = total + item.value);
    }, gain);

    this.listItem.reduce((total, item) => {
      if (!item.expense) return spent;
      return (spent = total + item.value);
    }, spent);
    balance = gain - spent;
    return balance;
  }
}
