import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
declare const require: any;
@Component({
  selector: 'app-ruta-estudiante',
  templateUrl: './ruta-estudiante.component.html',
  styleUrls: ['./ruta-estudiante.component.scss']
})
export class RutaEstudianteComponent implements OnInit {
  demo_html = require('!!html-loader!./ruta-estudiante.component.html');
  demo_ts = require('!!raw-loader!./ruta-estudiante.component.ts');
  auxtext = true;
  // show loading spinner:
  mapLoaded = false;
  // empty option before geoJSON loaded:
  options: any = {};
  mergeoptions: any = {};

  constructor(private http: HttpClient, private readonly _router: Router) { }

  onChartClick(entry) {
    console.log('Legend clicked', entry);
    if (entry.data.value > 0) {
      // console.log('Legend clicked', entry);
      this._router.navigate(['/convenioestudiante/', entry.data.name]);
      console.log('Legend clicked' + typeof entry.data.value);
    } else {
      this._router.navigate(['/convenioestudiante/']);
    }


  };
  onChartOver(entry) {

    //  (chartMouseOver)="onChartOver($event)"

    if (entry.data.value != null) {

      this.auxtext = true;
      // console.log('Legend clicked'+  this.auxtext);
      this.actualizaropcionesmerge(this.auxtext);
    } else {
      this.auxtext = false;
      this.actualizaropcionesmerge(this.auxtext);
    }



  };




  onChartOut(entry) {
    //(chartMouseOut)="onChartOut($event)"
    this.auxtext = false;
    //  console.log('Legend clicked' +  this.auxtext);
    this.actualizaropcionesmerge(this.auxtext);



  };

  ngOnInit() {


    // fetch map geo JSON data from server
    this.http.get('assets/data/mapaES.json')
      .subscribe(geoJson => {
        // hide loading:
        this.mapLoaded = true;
        // register map:
        echarts.registerMap('world', geoJson);
        // update options:


        this.inicaropciones(true);
        // console.log( this.options.series);
      });
  }

  inicaropciones(aux) {
    this.options = {
      title: {
        show:false,
        text: 'Convenios EPN',
        left: 'center',
        top: 'top'
      },
      tooltip: {
        showContent: aux,
        triggerOn: 'mousemove|click',
        formatter: 'Pais: {b}<br/> nº de convenios: {c}'


      },
      toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
              restore: { show: true,title: 'resetear\nmapa',},
          }
      },
      visualMap: {
        show:false,
        min: 0,
        max: 14,
        text: ['High', 'Low'],
        realtime: true,
        calculable: true,
        inRange: {
          color: ['lightgreen','green']
        }
      },
      series: [
        {
          name: 'Convenios EPN',
          type: 'map',
          mapType: 'world',
          roam: true,
          itemStyle: {
            emphasis: { label: { show: false } }
          },
          data: [
            { name: 'Afghanistan', value: null},
            { name: 'Angola', value: null},
            { name: 'Albania', value: null},
            { name: 'United Arab Emirates', value: null},
            { name: 'Argentina', value: null },
            { name: 'Armenia', value: null},
            { name: 'French Southern and Antarctic Lands', value: null},
            { name: 'Australia', value: null},
            { name: 'Austria', value: null },
            { name: 'Aruba', value: null},
            { name: 'Azerbaijan', value: null},
            { name: 'Baikonur', value: null},
            { name: 'Burundi', value: null},
            { name: 'Belgium', value: null },
            { name: 'Benin', value: null},
            { name: 'Burkina Faso', value: null},
            { name: 'Bangladesh', value: null},
            { name: 'Bulgaria', value: null},
            { name: 'Bahamas', value: null},
            { name: 'Bosnia and Herz.', value: null},
            { name: 'Belarus', value: null},
            { name: 'Belize', value: null},
            { name: 'Bermuda', value: null},
            { name: 'Bolivia', value: null },
            { name: 'Brasil', value: 2 },
            { name: 'Brunei', value: null},
            { name: 'Bhutan', value: null},
            { name: 'Botswana', value: null},
            { name: 'Cape Verde', value: null},
            { name: 'Central African Rep.', value: null},
            { name: 'Canadá', value: 2 },
            { name: 'Chile', value: 2 },
            { name: 'China', value: 1 },
            { name: "Côte d'Ivoire", value: null},
            { name: 'Cameroon', value: null},
            { name: 'Dem. Rep. Congo', value: null},
            { name: 'Congo', value: null},
            { name: 'Colombia', value: null },
            { name: 'Comoros', value: null},
            { name: 'Costa Rica', value: null},
            { name: 'Cuba', value: null },
            { name: 'Curaçao', value: null},
            { name: 'Northern Cyprus', value: null},
            { name: 'Cyprus', value: null},
            { name: 'Czech Rep.', value: null},
            { name: 'Alemania', value: 2 },
            { name: 'Djibouti', value: null},
            { name: 'Denmark', value: null},
            { name: 'Dominican Rep.', value: null },
            { name: 'Algeria', value: null},
            { name: 'Ecuador', value: null},
            { name: 'Egypt', value: null},
            { name: 'Eritrea', value: null},
            { name: 'España', value: 1 },
            { name: 'Estonia', value: null},
            { name: 'Ethiopia', value: null},
            { name: 'Finland', value: null},
            { name: 'Fiji', value: null},
            { name: 'Falkland Is.', value: null},
            { name: 'France', value: null },
            { name: 'Gabon', value: null},
            { name: 'United Kingdom', value: null},
            { name: 'Georgia', value: null},
            { name: 'Ghana', value: null},
            { name: 'Guinea', value: null},
            { name: 'Gambia', value: null},
            { name: 'Guinea-Bissau', value: null},
            { name: 'Eq. Guinea', value: null},
            { name: 'Greece', value: null},
            { name: 'Greenland', value: null},
            { name: 'Guatemala', value: null},
            { name: 'French Guiana', value: null},
            { name: 'Guyana', value: null},
            { name: 'Honduras', value: null},
            { name: 'Croatia', value: null},
            { name: 'Haiti', value: null},
            { name: 'Hungary', value: null},
            { name: 'Indonesia', value: null},
            { name: 'India', value: 1 },
            { name: 'Ireland', value: null},
            { name: 'Iran', value: null},
            { name: 'Iraq', value: null},
            { name: 'Iceland', value: null},
            { name: 'Israel', value: null},
            { name: 'Italia', value: 1 },
            { name: 'Jamaica', value: null},
            { name: 'Jordan', value: null},
            { name: 'Japan', value: null},
            { name: 'Kazakhstan', value: null},
            { name: 'Kenya', value: null },
            { name: 'Kyrgyzstan', value: null},
            { name: 'Cambodia', value: null},
            { name: 'Corea del Sur', value: 3 },
            { name: 'Kosovo', value: null},
            { name: 'Kuwait', value: null},
            { name: 'Lao PDR', value: null},
            { name: 'Lebanon', value: null},
            { name: 'Liberia', value: null},
            { name: 'Libya', value: null},
            { name: 'Sri Lanka', value: null},
            { name: 'Lesotho', value: null},
            { name: 'Lithuania', value: null},
            { name: 'Luxembourg', value: null},
            { name: 'Latvia', value: null},
            { name: 'Morocco', value: null},
            { name: 'Moldova', value: null},
            { name: 'Madagascar', value: null},
            { name: 'México', value: 1 },
            { name: 'Macedonia', value: null},
            { name: 'Mali', value: null},
            { name: 'Myanmar', value: null},
            { name: 'Montenegro', value: null},
            { name: 'Mongolia', value: null},
            { name: 'Mozambique', value: null},
            { name: 'Mauritania', value: null},
            { name: 'Malawi', value: null},
            { name: 'Malaysia', value: null},
            { name: 'Namibia', value: null},
            { name: 'New Caledonia', value: null},
            { name: 'Niger', value: null},
            { name: 'Nigeria', value: null},
            { name: 'Nicaragua', value: null},
            { name: 'Netherlands', value: null},
            { name: 'Norway', value: null},
            { name: 'Nepal', value: null},
            { name: 'New Zealand', value: null},
            { name: 'Oman', value: null},
            { name: 'Pakistan', value: null},
            { name: 'Panama', value: null},
            { name: 'Peru', value: null},
            { name: 'Philippines', value: null},
            { name: 'Papua New Guinea', value: null},
            { name: 'Polonia', value: 1 },
            { name: 'Puerto Rico', value: null},
            { name: 'Dem. Rep. Korea', value: null},
            { name: 'Portugal', value: null },
            { name: 'Paraguay', value: null},
            { name: 'Qatar', value: null},
            { name: 'Romania', value: null},
            { name: 'Rusia', value: 1 },
            { name: 'Rwanda', value: null},
            { name: 'W. Sahara', value: null},
            { name: 'Saudi Arabia', value: null},
            { name: 'Sudan', value: null},
            { name: 'S. Sudan', value: null},
            { name: 'Senegal', value: null},
            { name: 'Solomon Is.', value: null},
            { name: 'Sierra Leone', value: null},
            { name: 'El Salvador', value: null},
            { name: 'Somaliland', value: null},
            { name: 'Somalia', value: null},
            { name: 'Serbia', value: null},
            { name: 'Suriname', value: null},
            { name: 'Slovakia', value: null},
            { name: 'Slovenia', value: null},
            { name: 'Sweden', value: null},
            { name: 'Swaziland', value: null},
            { name: 'Switzerland', value: null },
            { name: 'Syria', value: null},
            { name: 'Chad', value: null},
            { name: 'Togo', value: null},
            { name: 'Thailand', value: null},
            { name: 'Tajikistan', value: null},
            { name: 'Taiwan', value: null},
            { name: 'Turkmenistan', value: null},
            { name: 'Timor-Leste', value: null},
            { name: 'Trinidad and Tobago', value: null },
            { name: 'Tunisia', value: null},
            { name: 'Turkey', value: null},
            { name: 'England', value: null},
            { name: 'Tanzania', value: null},
            { name: 'Uganda', value: null},
            { name: 'Ukraine', value: null},
            { name: 'Uruguay', value: null},
            { name: 'USA', value: 2 },
            { name: 'Uzbekistan', value: null},
            { name: 'Venezuela', value: null},
            { name: 'Vietnam', value: null},
            { name: 'Vanuatu', value: null},
            { name: 'West Bank', value: null},
            { name: 'Yemen', value: null},
            { name: 'South Africa', value: null},
            { name: 'Zambia', value: null},
            { name: 'Zimbabwe', value: null}

          ]
        }
      ]
    };
  }
  actualizaropcionesmerge(aux) {
    this.mergeoptions = {
      tooltip: {
        showContent: aux,
        triggerOn: 'mousemove|click',
        formatter: 'Pais: {b}<br/> nº de convenios: {c}'


      }
    }
  }



}