import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { TItem } from '../../types/itens.type';
import { TStatus } from '../../types/status.type';
import { genKey } from '../../utils/genKey';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnChanges {
  @Input() status: TStatus | undefined;
  @Input() editItem: TItem | undefined;

  @Output('changeStatus') statusEmitter = new EventEmitter<TStatus>();
  @Output('addItem') addItemEmitter = new EventEmitter<TItem>();
  @Output() editItemEmitter = new EventEmitter<TItem>();

  description: string | undefined;
  value: number | undefined;
  expense: boolean = false;

  handleEditItem() {
    if (this.description !== undefined && this.value !== undefined) {
      this.editItemEmitter.emit({
        description: this.description,
        value: this.value,
        expense: this.expense,
        id: this.editItem!.id,
      });
    }
    this.statusEmitter.emit('add');
    this.status = 'add';
    this.description = undefined;
    this.value = undefined;
    this.expense = false;
  }

  ngOnChanges() {
    if (this.editItem === undefined) return;
    this.description = this.editItem.description;
    this.value = this.editItem.value;
    this.expense = this.editItem.expense;
    if (this.status === 'add') {
      this.description = undefined;
      this.value = undefined;
      this.expense = false;
    }
  }
  setStatus(value: TStatus): void {
    this.statusEmitter.emit(value);
  }

  radioChecked() {
    this.expense = !this.expense;
  }

  handleAddItem() {
    if (this.description && this.value) {
      this.addItemEmitter.emit({
        description: this.description,
        value: this.value,
        expense: this.expense,
        id: genKey(),
      });
      this.description = undefined;
      this.value = undefined;
      this.expense = false;
    }
  }
}
