import { Component, EventEmitter, Input, Output } from '@angular/core';
import { itens } from '../../data/itens';
import { TStatus } from '../../types/status.type';
import { TItem } from '../../types/itens.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  itens = itens;
  @Input() status: TStatus | undefined;

  @Output('changeStatus') statusEmitter = new EventEmitter<TStatus>();
  @Output('deleteItem') deleteItemEmitter = new EventEmitter<number>();
  @Output('editItem') editItemEmitter = new EventEmitter<TItem>();

  handleEdit(item: TItem) {
    this.statusEmitter.emit('edit');
    this.editItemEmitter.emit(item);
  }

  handleDelete(id: number) {
    this.deleteItemEmitter.emit(id);
  }
}
