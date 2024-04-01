import { Component } from '@angular/core';
import { TItem } from './types/itens.type';
import { itens } from './data/itens';
import { TStatus } from './types/status.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  status: TStatus = 'add';
  editItem: TItem | undefined;
  itensList: TItem[] = itens;

  setStatus(value: TStatus) {
    this.status = value;
  }

  handleAddItem(item: TItem) {
    // simulando chamada http
    itens.push(item);
  }

  handleDeleteItem(id: number) {
    const wantedItem = itens.filter((item) => item.id === id)[0];
    const index = itens.indexOf(wantedItem, 0);
    itens.splice(index, 1);
  }

  handleEditItem(editedItem: TItem) {
    const wantedItem = itens.filter((item) => item.id === editedItem.id)[0];
    const index = itens.indexOf(wantedItem, 0);

    itens[index] = { ...editedItem };
  }

  updateEditItem(item: TItem) {
    this.editItem = item;
  }
}
