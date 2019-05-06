/**
 * Convenios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    id:{
      type:'number',
      autoIncrement: true,
      unique: true,
      columnName: 'idConvenio'

    },
    firma:{
      type:'string',
      columnName: 'Firma'
    }, fin:{
      type:'string',
      columnName: 'Fin'
    },

    vigencia:{
      type:'number',
      columnName: 'Vigencia'
    },/*
    estado:{
      type:'string',
      columnName: 'Estado'
    },*/
    
    organizacion:{
      type:'string',
      columnName: 'Organizacion'
    },
    pais:{
      type:'string',
      columnName: 'Pais'
    },
    tipo:{
      type:'string',
      columnName: 'Tipo'
    },
    
    objeto:{
      type:'string',
      columnName: 'Objeto'
    },
    linkpagina:{
      type:'string',
      columnName: 'LinkPagina'
    },/*
    ejecucion:{
      type:'string',
      columnName: 'Ejecución'
    },
    tipo:{
      type:'string',
      columnName: 'Tipo'
    },titulo:{
      type:'string',
      columnName: 'Titulo'
    },
    url:{
      type:'string',
      columnName: 'Url'
    },*/
    







     
  },

};

