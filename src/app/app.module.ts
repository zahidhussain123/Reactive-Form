import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, importComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PservicesService } from './services/pservices.service';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    importComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [PservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
