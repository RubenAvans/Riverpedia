var express = require('express');
var router = express.Router();
var noticiasModel = require('../../models/noticiasModel')

/* GET home page. */
router.get('/', async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();
  res.render('admin/noticias', {
    layout: "admin/layout",
    usuario: req.session.nombre,
    noticias
  });
});

// agrego la url '/agregar'
router.get('/agregar', (req, res, next) =>{
  res.render('admin/agregar',{
    layout: 'admin/layout'
  }); // cierro render
});// cierro get

// agrego comando para vincular con la bs
router.post('/agregar', async (req, res, next) => {
  try{
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") // cierro condiciones
    {
      await noticiasModel.insertNoticia(req.body);
      res.redirect('/admin/noticias')
    } // cierro if
    else {
      res.render ('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      }) // cierro render
    } // cierro else
  } // cierro try
  catch (error) {
    console.error(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la novedad'
    }); // cierro render
  } // cierro catch
}); // cierro post


module.exports = router;