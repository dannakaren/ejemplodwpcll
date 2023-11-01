// Importando Mongoose
import mongoose from 'mongoose';
// Destructurando la fn Schema 
const { Schema } = mongoose;
// construir un schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requiere: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Compilando el schema para generar el modelo
export default mongoose.model('project', ProjectSchema);
