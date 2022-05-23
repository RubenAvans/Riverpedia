var express = require('express');
var router = express.Router();
var noticiasModel = require('./../models/noticiasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/noticias', async function (req, res, next) {
    let noticias = await noticiasModel.getNoticias();

    noticias = noticias.map(noticias => {
        if (noticias.img_id) {
            const imagen = cloudinary.url(noticias.img_id, {
                width: 300,
                height: 600,
                crop: 'crop'
            });
            return {
                ...noticias,
                imagen
            }//cierro return
        }//cierro if
        else {
            return {
                ...noticias,
                imagen: ''
            } // cierro return
        } // cierro else
    }); // cierro noticias.map

    res.json(noticias);
}); // cierro router.get


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'ru.messi.10@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó a traves de la página de contacto de RIVERPEDIA y quiere más información a este correo: ${req.body.email} <br> Además hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
    }; // cierro mail

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }) // cierra transporte

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    }); // cierro status
}); // cierro router.post

module.exports = router