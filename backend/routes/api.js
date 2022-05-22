var express = require('express');
var router = express.Router();
var noticiasModel = require('./../models/noticiasModel');
var cloudinary = require('cloudinary').v2;

router.get('/noticias', async function (req, res, next){
    let noticias = await noticiasModel.getNoticias();

    noticias = noticias.map(noticias => {
        if (noticias.img_id) {
            const imagen = cloudinary.url(noticias.img_id, {
                width: 960,
                height: 200,
                crop: 'pad'
            });
            return {
                ...noticias,
                imagen
            }//cierro return
        }//cierro if
        else {
            return{
                ...noticias,
                imagen: ''
            } // cierro return
        } // cierro else
    }); // cierro noticias.map

    res.json(noticias);
}); // cierro router.get

module.exports = router