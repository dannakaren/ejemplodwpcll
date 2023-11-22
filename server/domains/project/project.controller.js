// Importing winston logger
import log from '../../config/winston';

// Importando el modelo
import ProjectModel from './project.model';

// Importando Httperrors

// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
const add = (req, res) => {
};

// POST "/project/add"
const addPost = async (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
const addPost = (req, res) => {
  // Se desestructura la información
  // de la peticion
  const { validData: project } = req;
  // Creando la instancia de un documento
  // con los valores de 'project'
  const projectDocument = new ProjectModel(project);
  try {
    // Creando la instancia de un documento con los valores de 'project'
    const savedProject = await ProjectModel.create(project);
    // Se contesta la información del proyecto al cliente
    log.info('Se entrega al cliente información del proyecto cargado');
    return res.status(200).json(savedProject);
  } catch (error) {
    log.error(
      'ln 53 project.controller: Error al guardar proyecto en la base de datos',
    );
    return res.status(500).json(error);
  }
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  add,
  addPost,
};