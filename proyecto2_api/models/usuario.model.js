module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        usuario_correo: {
            type: Sequelize.STRING
        },
        usuario_contrasena: {
            type: Sequelize.STRING
        },
        usuario_nombre: {
            type: Sequelize.STRING
        },
        usuario_telefono: {
            type: Sequelize.STRING
        },
        usuario_estatus: {
            type: Sequelize.BOOLEAN
        },
        fecha_Registro:{
            type: Sequelize.DATEONLY
        },
        fechaVigente:{
            type: Sequelize.DATEONLY
        },
        rol_Id:{
            type: Sequelize.INTEGER
        }
    });

    return Usuario;
};