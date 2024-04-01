import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/card/cards.component';

import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { ValueTransformPipe } from './pipes/value-transform.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    FormComponent,
    TableComponent,
    TextTransformPipe,
    ValueTransformPipe,
  ],
  imports: [BrowserModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
