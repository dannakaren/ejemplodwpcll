
const express = require('express');
const router = express.Router();

const imagenes = ['https://th.bing.com/th/id/R.2708e757cf8d1ad31bfa4412cf500633?rik=bD9Hd5oSlb2tCw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_wsl8GstV6SU%2fTG4EKl96uTI%2fAAAAAAAAAAM%2f2_PGSZz0yDQ%2fs1600%2fLogoVectorizado%2bITGAM_.jpg&ehk=JtVkEqbASeDg%2bbvPkPDOhAaWPionkj2cidv7FN4Mil4%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.uTKyGFj7Z2ICaKCL8-fxIAHaC6?pid=ImgDet&rs=1',
  'https://yt3.ggpht.com/a/AATXAJywPUTxfk_0y0qGRMQFCwqb1PUU3fwHiUMvMQ=s900-c-k-c0xffffffff-no-rj-mo',
   'https://th.bing.com/th/id/R.9a34696a2715815045c1dc8962b845d5?rik=r5%2bDhzlLGcgIkw&riu=http%3a%2f%2fgamadero.tecnm.mx%2fimagenes%2fnoticias%2foctubre2019%2fnoticia+convocatoria+nuevo+ingreso.jpg&ehk=pOHetwxTszZhUYb9ybBG77Tqcpxkf%2fhrXFfOcTSbxnE%3d&risl=&pid=ImgRaw&r=0'
];

function seleccionarImagenAlAzar(imagenes) {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

const tecInfo = {
    name: "Instituto Tecnológico de Gustavo A Madero",
    description: "El Tecnológico Nacional de México (TecNM), antiguamente llamado Dirección General de Educación Superior Tecnológica de México o Sistema Nacional de Institutos Tecnológicos de México1​ es un sistema educativo de educación superior pública que engloba un conjunto de Institutos Tecnológicos o Campus presentes en toda la República Mexicana.",
    mission: "Contribuir significativamente en la formación de capital humano altamente calificado bajo estándares internacionales.",
    values: "*Respeto    *Liderazgo    *Perseverancia    *Responsabilidad",

};

router.get('/api/tec', function (req, res, next) {
const imagenAleatoria = seleccionarImagenAlAzar(imagenes);
res.send({tecInfo,image: imagenAleatoria});
});

router.get('/tec', function (req, res, next) {
    
const imagenAleatoria = seleccionarImagenAlAzar(imagenes);

res.render('about', { ...tecInfo,image: imagenAleatoria});
});

module.exports = router;