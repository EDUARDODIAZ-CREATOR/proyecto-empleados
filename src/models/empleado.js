import mongoose from 'mongoose';

// Definir el esquema
const empleadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  puesto: {
    type: String,
    required: true
  },
  salario: {
    type: Number,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  }
});

// Crear el modelo
const Empleado = mongoose.model('Empleado', empleadoSchema);

// ✅ Exportación correcta para ES Modules
export default Empleado;
