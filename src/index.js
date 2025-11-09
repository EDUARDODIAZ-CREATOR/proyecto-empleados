import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // 👈 importar

import empleadoRoutes from './routes/empleado.js';

dotenv.config();
const app = express();

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors()); // 👈 habilita CORS para todas las peticiones
app.use(express.json());

// ✅ Rutas
app.use('/api', empleadoRoutes);

console.log("✅ Rutas de empleados cargadas en /api");

mongoose.connect(uri)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
