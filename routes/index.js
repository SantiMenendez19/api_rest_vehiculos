const express = require("express")
const router = express.Router()

// Controllers
const vehiculoController = require("../controllers/vehiculoController")

module.exports = function() {
    // Get Vehiculos
    router.get("/vehiculos", vehiculoController.getVehiculos)
    // Get Vehiculo
    router.get("/vehiculos/find/:id", vehiculoController.getVehiculo)
    // Get Vehiculo query
    router.get("/vehiculos/find", vehiculoController.getVehiculoFilter)
    // Agregar vehiculo
    router.post("/vehiculos", vehiculoController.postVehiculo)
    // Eliminar vehiculo
    router.delete("/vehiculos/:id", vehiculoController.deleteVehiculo)
    // Actualizar vehiculo completo
    router.put("/vehiculos/:id", vehiculoController.putVehiculo)
    // Actualizar unos datos del vehiculo
    router.patch("/vehiculos/:id", vehiculoController.patchVehiculo)
    return router
}