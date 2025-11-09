import express from 'express';
import Empleado from '../models/empleado.js';

const router = express.Router();
console.log("📁 Archivo empleado.js cargado correctamente");
// 📌 Crear empleado
router.post("/empleados", async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    const nuevoEmpleado = await empleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📋 Obtener todos los empleados
router.get("/empleados", async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔍 Obtener un empleado por ID
router.get("/empleados/:id", async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✏️ Actualizar empleado
router.put("/empleados/:id", async (req, res) => {
  try {
    const empleadoActualizado = await Empleado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!empleadoActualizado) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(empleadoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 🗑️ Eliminar empleado
router.delete("/empleados/:id", async (req, res) => {
  try {
    const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleadoEliminado) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json({ message: "Empleado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; // 👈 IMPORTANTE: usa export default
