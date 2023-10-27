import mongoose from "mongoose";
import log from '../config/winston';
//creando la funcion de conexion
export default async function connectWithRetry(mongoUrl){
    try{
    await mongoose.connect(mongoUrl);
    log.info('✅Conectando a MongoDB');
    } catch(error){
    log.error(`💔 No se logro la conexion a la db:${error.message}`);
    log.error('Intenando la conexion en 20 segundos');
    setTimeout(() => connectWithRetry(mongoUrl), 20000);   
  }
}
