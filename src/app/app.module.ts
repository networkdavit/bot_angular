import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
