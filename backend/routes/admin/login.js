var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: "admin/layout"
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
}); // al hacer click en cerrar sesión, borra los datos guardados y envía a página de login

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } // cierro if
    else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    } // cierro else
  } // cierro try
  catch (error) {
    console.log(error);
  } // cierro catch
}); // cierro router.post

module.exports = router;