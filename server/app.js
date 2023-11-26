// Cargando dependencias
import express from 'express';
// Enable post and delete verbs
// eslint-disable-next-line import/no-extraneous-dependencies
import methodOverride from 'method-override';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
// Setting Webpack Modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import configTemplateEngine from './config/templateEngine';

// Importing webpack configuration
import webpackConfig from '../webpack.dev.config';
// Importando configurador de sesiones
import configSession from './config/configSessions';
// Impornting winston logger
import log from './config/winston';

// Importando enrutador
import router from './router';
import debug from './services/debugLogger';
// Creando variable del directorio raiz
// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());
// Creando la instancia de express
const app = express();
// Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';
// Deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // Start Webpack dev server
  debug('🛠️ Ejecutando en modo desarrollo 🛠️');
  // Adding the key "mode" with its value "development"
  webpackConfig.mode = nodeEnviroment;
  // Setting the dev server port to the same value as the express server
  webpackConfig.devServer.port = process.env.PORT;
  // Setting up the HMR (Hot Module Replacement)
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregar el plugin a la configuración de desarrollo
  // de webpack
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // Creating the bundler
  const bundle = webpack(webpackConfig);
  // Enabling the webpack middleware
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  //  Enabling the webpack HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🏭 Ejecutando en modo producción 🏭');
}
// Configurando el motor de plantillas
configTemplateEngine(app);
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    log.info('✔Verificacion de conexion a db exitosa');
    next();
  } else {
    log.info('❌No pasa la verificacion de conexion a la DB');
    res.status(503).render('errors/e503View', { layout: 'errors' });
  }
});
// Se establecen los middlewares
app.use(morgan('dev', { stream: log.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Enable post and delete verbs
app.use(methodOverride('_method'));
// Habilitando manejo de sesiones y mensajes flash
configSession(app);
// Habilitando manejo de sesiones y mensajes flash
// Crea un server de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Activa "usersRourter" cuando se
// solicita "/users"
// app.use('/author', (req, res)=>{
//   res.json({mainDeveloper: "Ivan Rivalcoba"})
// });
router.addRoutes(app);
export default app;
