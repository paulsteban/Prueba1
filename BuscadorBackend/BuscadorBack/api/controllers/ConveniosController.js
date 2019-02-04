/**
 * ConveniosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    holaMundo: function (peticion, respuesta) {
        return respuesta.ok('ok');
      },
      buscarPorPais: async function (req, res) {
        // TENER ACCESO A TODOS LOS MODELOS
        // Body Query
        const parametros = req.allParams();
    
        var paisCac = await Convenios.find({
          pais: {'startsWith': parametros.pais}
        });
    
        return res.ok('ok2');
    
      },

};

