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
      message: 'No se cargó la noticia'
    }); // cierro render
  } // cierro catch
}); // cierro post

// para eliminar
router.get('/eliminar/:id', async(req, res, next)=>{
  var id = req.params.id;
  await noticiasModel.deleteNoticiasById(id);
  res.redirect('/admin/noticias');
}); // cierro get de eliminar

//para editar (tomar noticia)
router.get('/editar/:id', async (req, res, next)=>{
  var id = req.params.id;
  console.log(req.params.id);
  var noticia = await noticiasModel.getNoticiaById(id);

  res.render('admin/editar',{
    layout: 'admin/layout',
    noticia
  }); // cierro render
}); // cierro get para editar

//para editar (actualizar noticia)
router.post('/editar', async (req, res, next)=>{
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await noticiasModel.editarNoticiaById(obj, req.body.id);
    res.redirect('/admin/noticias');
  } // cierro try
  catch (error) {
    console.log(error);
    res.render('admin/editar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la noticia'
    }); // cierro render
  }; // cierro catch
}); // cierro try


module.exports = router;