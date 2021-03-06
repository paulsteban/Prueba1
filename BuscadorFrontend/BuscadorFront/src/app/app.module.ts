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
import { RutaMapaComponent } from './rutas/ruta-mapa/ruta-mapa.component';
import { RutaPaisComponent } from './rutas/ruta-pais/ruta-pais.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ConvenioServicioService } from './servicios/convenio-servicio.service';
import { RutaEstudianteComponent } from './rutas/ruta-estudiante/ruta-estudiante.component';
import { RutaEstudianteConvenioComponent } from './rutas/ruta-estudiante-convenio/ruta-estudiante-convenio.component';
import { RutaMapaProfComponent } from './rutas/ruta-mapa-prof/ruta-mapa-prof.component';
import { ConvenioProfService } from './servicios/convenio-prof.service';
import { RutaUniversidadComponent } from './rutas/ruta-universidad/ruta-universidad.component';
import { EmbedVideo } from 'ngx-embed-video';
@NgModule({
  declarations: [
    AppComponent,
    RutaConveniosComponent,
    RutaPDFComponent,
    RutaMapaComponent,
    RutaPaisComponent,
    RutaEstudianteComponent,
    RutaEstudianteConvenioComponent,
    RutaMapaProfComponent,
    RutaUniversidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule ,
    TableModule,BrowserAnimationsModule,PdfViewerModule,NgxEchartsModule,EmbedVideo.forRoot(),
    
  ],
  providers: [ConvenioServicioService,ConvenioProfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
