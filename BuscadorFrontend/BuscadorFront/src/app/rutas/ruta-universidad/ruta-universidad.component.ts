import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universidads } from 'src/app/interfaces/universidad';
import { EmbedVideoService } from 'ngx-embed-video';
@Component({
  selector: 'app-ruta-universidad',
  templateUrl: './ruta-universidad.component.html',
  styleUrls: ['./ruta-universidad.component.scss']
})
export class RutaUniversidadComponent implements OnInit {
universidades;
busqueda:Universidads []=[];
busquedax;
auxvideo;
auxwebsite;
yt_iframe_html: any;
  constructor( private readonly _activatedRoute: ActivatedRoute,private embedService: EmbedVideoService) { }

  ngOnInit() {
    this.universidades = [
      { organizacion: 'FACHHOCHSCHULE MANNHEIM HOCHSHULE FÜR  TECHNIK UND GESTALTUNG', website: 'https://www.english.hs-mannheim.de/studying-here/international-office.html', video:'https://www.youtube.com/watch?v=jmwverRm1vE\n',pais:'Alemania',instrucciones:'1)\tVerifica si cumples con los requerimientos generales para participar en un programa de intercambio. \n' +
        '•\tEstar matriculado/a en la EPN\n' +
        '•\tNo tener registrada ninguna sanción disciplinaria por parte de Consejo Politécnico \n' +
        '•\tHaber aprobado todas las asignaturas en el período académico inmediato anterior a la solicitud de movilidad\n' +
        '•\tTener el nivel de dominio del idioma requerido en el programa de la IESE\n' +
        '•\tHaber alcanzado una nota promedio estudiantil superior al promedio de la carrera en el período académico anterior al de la solicitud \n' +
        '•\tHaber aprobado entre el 40% y el 80% de la malla curricular vigente. La máxima Autoridad de la Unidad Académica, cuando el caso lo amerite, puede autorizar la movilidad fuera de este rango.\n' +
        '•\tCumplir con los demás requisitos establecidos en cada convocatoria y programa de intercambio específico\n' +
        '\n' +
        '2)\tRevisa la oferta académica, requerimientos específicos e información de interés de la universidad de destino en el siguiente link:\n' +
        'https://www.english.hs-mannheim.de/studying-here/international-office.html\n' +
        '3)\tSi cumples con los requisitos y has identificado un programa en la universidad de destino por favor llena el siguiente formulario y entrégalo en la OPSI:\n' +
        '\n' +
        'Form\n' +
        '\n' +
        'Nota: \n' +
        '\n' +
        'El plan de estudios en el exterior debe incluir al menos 12 créditos de asignaturas homologables, que no hayan sido reprobadas en la EPN. Para que una asignatura sea homologada, sus contenidos deben tener una similitud de al menos 80% y el número de créditos debe ser igual o mayor.\n' +
        '\n' +
        ' Asesoramiento de la OPSI\n' +
        '\n' +
        'La OPSI realizará una entrevista acerca de tu programa de interés, te asesorará acerca de los requisitos solicitados por la universidad de destino, y si es requerido apoyará en reunir los materiales contemplados en la aplicación de homologación en la Facultad de la EPN. \n' +
        '\n' +
        'Homologación\n' +
        '\n' +
        'Presentación de la aplicación para la homologación en el Subdecanato de la Facultad \n' +
        '\n' +
        'Una vez obtenida la autorización de homologación de las materias a ser cursadas en la universidad socia debes presentar la misma junto con la documentación de confirmación de los requisitos del formulario anteriormente completado que se detalla a continuación:\n' +
        '\n' +
        '•\tCurriculum académico\n' +
        '•\tCarta de motivación (entregar en el idioma del país de interés, dirigida a la OPSI)\n' +
        '•\tHoja de vida (entregar en el idioma del país de interés)\n' +
        '•\tCopia del certificado de idiomas (emitido por el CEC-EPN o la institución en la que los haya cursado)\n' +
        '•\tCertificado de poseer un promedio superior al promedio de la carrera.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n',imagen:''},
      { organizacion: 'UNIVERSITY OF NEW MEXICO', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSIDAD DE VALLADOLID', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'BERLIN UNIVERSITY OF TECHNOLOGY', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UPPER IOWA UNIVERSITY', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'AJOU UNIVERSITY', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'KUMOH NATIONAL INSTITUTE OF TECHNOLOGY', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'YORK UNIVERSITY', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSITY OF GDANSK', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'SASTRA UNIVERSITY ', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: ' UNIVERSIDAD DE SAO PAULO ', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'ITMO UNIVERSITY ', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'TAIWÁN TECH', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSITÁ DELLA CALABRIA', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'PAME UDUAL', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSIDAD DE SANTIAGO DE CHILE', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSITY OF SASKATCHEWAN', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSITY OF SEOUL', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'UNIVERSIDAD DE CONCEPCIÓN', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: 'BENEMÉRITA UNIVERSIDAD AUTONÓMA DE PUEBLA', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: '', website: '', video:'',pais:'',instrucciones:'',imagen:''},
      { organizacion: '', website: '', video:'',pais:'',instrucciones:'',imagen:''},


    ];
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
    .subscribe(
      (parametros: ParametrosRutUniversidad) => { 

        //this.auxTexto=parametros.idUniversidad;
        const helado = this.universidades.forEach((valuex)=>{if ((valuex.organizacion==parametros.idUniversidad)){
          //this.busqueda.push(valuex);
          this.busquedax = valuex;
          this.auxvideo=valuex.video;
          this.auxwebsite=valuex.website;
          this.yt_iframe_html =  this.embedService.embed(this.auxvideo, {
            query: { portrait: 0, color: '333' },
            attr: { width: 400, height: 200 }
          });
         //this.auxTexto=parametros.idUniversidad;
        
        }
      
        
      });
       },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }

}
interface ParametrosRutUniversidad {
  idUniversidad: string;
}