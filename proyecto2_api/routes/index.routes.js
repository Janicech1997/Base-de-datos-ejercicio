const { pedido } = require("../models");

module.exports = app => {
    
    //var router = require("express").Router();
    const express = require("express");
    const rutasProtegidas = express.Router();
    const config = require("../config/config");
    const jwt = require('jsonwebtoken');

    app.set("llave", config.llave);
    
    rutasProtegidas.use((req, res, next) => {
        const token = req.headers["access-token"];
        if (token) {
            jwt.verify(token, app.get("llave"), (err, decoded) => {
                if (err) {
                    return res.status(500).send("token error");
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(500).send("token error");
        }
    });
    
    /*
    * RUTAS PARA EL ROL
    */
    const rol = require("../controller/rol.controller.js");

    var router = require("express").Router();
    // Crear un nuevo Rol 
    router.post("/rol/crear", rol.create); //http://localhost:9595/janice/rol

    // Recuperar todos los Roles
    router.get("/rol/listar", rol.findAll); //http://localhost:9595/janice/roles/

    // Encontrar Rol por id
    router.get("/rol/:id",rutasProtegidas, rol.findOne); //http://localhost:9595/janice/rol/[id]

    // Actualizar Rol por id
    router.put("/rol/:id", rol.update); //http://localhost:9595/janice/rol/[id]

    // Eliminar un Rol por id
    router.delete("/rol/:id", rol.delete); //http://localhost:9595/janice/rol/[id]

    // Eliminar todos los Roles de la base de datos
    router.delete("/rol/eliminar", rol.deleteAll); //http://localhost:9595/janice/rolesALL/

    router.post("/registrarRol", rol.create);
    

    /**
     * RUTAS PARA EL USUARIO
     */
     const usuario = require("../controller/usuario.controller.js");

     router.post("/usuario/crear", usuario.create); //http://localhost:9595/janice/usuario/crear
    
     router.get("/usuario/listar", usuario.findAll); //http://localhost:9595/janice/usuario/listar
     
     router.get("/usuario/:id", usuario.findOne); //http://localhost:9595/janice/usuario/1
     
     router.put("/usuario/:id", usuario.update); //http://localhost:9595/janice/usuario/1
     
     router.delete("/usuario/:id", usuario.delete); //http://localhost:9595/janice/usuario/1
     
     router.delete("/usuario/eliminar", usuario.deleteAll);
     
     router.post("/login", usuario.login); //http://localhost:9595/janice/login
     
     router.post('/registrar', usuario.create); //http://localhost:9595/janice/registrar

     app.use('/janice', router);
};