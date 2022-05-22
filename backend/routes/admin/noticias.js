var express = require('express');
var router = express.Router();
var noticiasModel = require('../../models/noticiasModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();
  noticias = noticias.map(noticia => {
    if (noticia.img_id) {
      const imagen = cloudinary.image(noticia.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      }); // cierro const imagen
      return {
        ...noticia,
        imagen
      } // cierro return
    } // cierro if
    else {
      return {
        ...noticia,
        imagen: ''
      } // cierro return
    } // cierro else
  }); // ciero noticias.map
  
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

    var img_id = '';
    if(req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    } // cierro if

    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") // cierro condiciones
    {
      await noticiasModel.insertNoticia({
        ...req.body,
        img_id
      });

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
  
  let noticia = await noticiasModel.getNoticiaById(id);
  if (noticia.img_id){
    await (destroy(noticia.img_id));
  };

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

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === '1'){
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
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