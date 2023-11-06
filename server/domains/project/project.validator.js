import * as Yup from 'yup';
// Crear un esquema de validacion
const projectSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere un nombre de proyecto'),
    description: Yup.string()
    .max( 500,'La descripcion no debe tener mas de 500 caracteres' )
    .required('Se requiere una descripcion del proyecto'),
});
// Middleware de extraccion
cosnt getProject =(req, res) => {
    //extrayendo datos de la peticion
    const {name, description } = req.body;
    return {
        name,
        description,
    };
};
export default{
    projectSchema,
    getProject,
}