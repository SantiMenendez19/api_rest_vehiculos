// Controller Vehiculo

const Vehiculo = require("../models/vehiculo");

exports.getVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.find({});
        res.status(200).json(vehiculos);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findOne({ _id: req.params.id });
        res.status(200).json(vehiculo);
    }
    catch (err) {
        res.status(404).json(err);
    }
};

exports.getVehiculoFilter = async (req, res) => {
    // Reviso si hay id, lo renombro a _id
    if (req.query.id) {
        req.query["_id"] = req.query.id;
        delete req.query["id"];
    }
    try {
        const vehiculo = await Vehiculo.find(req.query);
        res.status(200).json(vehiculo);
    }
    catch (err) {
        res.status(404).json(err);
    }
};

exports.postVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.status(200).json(vehiculo);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

exports.deleteVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.deleteOne({ _id: req.params.id });
        res.status(200).json(vehiculo);
    }
    catch (err) {
        res.status(404).json(err);
    }
}

exports.putVehiculo = async (req, res) => {
    try {
        // Obtengo vehiculo por id
        const vehiculo = await Vehiculo.findOne({ _id: req.params.id });
        // Reviso si hay un elemento en el body y lo actualizo
        const keys = Object.keys(req.body);
        if (keys.length > 0) {
            keys.forEach(key => {
                vehiculo[key] = req.body[key];
            });
            // Actualizo fecha de actualizacion
            now = new Date();
            vehiculo.updatedAt = now;
            // Validacion
            await vehiculo.validate();
            // Actualizo vehiculo en mongoDB
            await vehiculo.save();
        }
        // Respondo con el vehiculo actualizado
        res.status(200).json(vehiculo);
    }
    catch (err) {
        res.status(404).json(err);
    }
}

exports.patchVehiculo = async (req, res) => {
    try {
        // Obtengo vehiculo por id
        const vehiculo = await Vehiculo.findOne({ _id: req.params.id });
        // Creo un nuevo vehiculo con los atributos recibidos
        const vehiculoPatch = new Vehiculo(req.body);
        // Valido que el vehiculo sea correcto
        await vehiculoPatch.validate();
        // Reemplazo el vehiculo por el nuevo creado
        vehiculoPatch._id = vehiculo._id;
        await vehiculo.deleteOne();
        await vehiculoPatch.save();
        // Respondo con el vehiculo actualizado
        res.status(200).json(vehiculoPatch);
    }
    catch (err) {
        res.status(404).json(err);
    }
}
