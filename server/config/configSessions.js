import ExpressSession from 'express-session';
import ConnectFlash from 'connect-flash';
import MongoStore from 'connect-mongo';
import configKeys from './configKeys';

const createSessionMiddleware = (app) => {
  const options = {
    secret: 'awesome',
    resave: true,
    saveUninitialized: true,
  };

  try {
    const mongoStoreOptions = {
      mongoUrl: configKeys.MONGO_URL,
      ttl: 1 * 24 * 60 * 60, // Salva la sesión por 1 día
    };

    const store = MongoStore.create(mongoStoreOptions);
    options.store = store;
  } catch (error) {
    console.error('Error al crear el MongoStore:', error);
    // Puedes manejar el error de alguna manera aquí
    // Por ejemplo, proporcionar un valor por defecto para options.store
  }

  const sessionsMiddleware = ExpressSession(options);

  app.use(sessionsMiddleware);
  app.use(ConnectFlash());

  app.use((req, res, next) => {
    res.locals.successMessage = req.flash('successMessage');
    res.locals.errorMessage = req.flash('errorMessage');
    res.locals.infoMessage = req.flash('infoMessage');
    res.locals.passportError = req.flash('passportError');
    next();
  });

  return app;
};

export default createSessionMiddleware;
