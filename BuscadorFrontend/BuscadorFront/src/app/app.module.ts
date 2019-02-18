import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaConveniosComponent } from './rutas/ruta-convenios/ruta-convenios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RutaPDFComponent } from './rutas/ruta-pdf/ruta-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,
    RutaConveniosComponent,
    RutaPDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule ,
    TableModule,BrowserAnimationsModule,PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
