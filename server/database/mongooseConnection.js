import mongoose, { connect, mongo } from 'mongoose';
import log from '../config/winston';

// Creando la funcion de conexion
export default async function connectWidthRetry(mongoUrl) {
  try {
    await mongoose.connect(mongoUrl);
    log.info('✅ Conectando a MongoDB');
  } catch (error) {
    log.error(`💔 No se logro la conexion ala db 💔: ${error.message}`);
    log.error('Intentando la conexion en 20 segundos');
    setTimeout(() => connectWidthRetry(mongoUrl), 20000);
  }
}
