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
    },
    vigencia:{
      type:'number',
      columnName: 'Vigencia'
    },
    estado:{
      type:'string',
      columnName: 'Estado'
    },
    pais:{
      type:'string',
      columnName: 'Pais'
    },
    organizacion:{
      type:'string',
      columnName: 'Organizacion'
    },
    titulo:{
      type:'string',
      columnName: 'Titulo'
    },
    objeto:{
      type:'string',
      columnName: 'Objeto'
    },
    ejecucion:{
      type:'string',
      columnName: 'Ejecución'
    },
    tipo:{
      type:'string',
      columnName: 'Tipo'
    }
    







     
  },

};

