import { Sequelize } from "sequelize";

// parametros (nombre de la base de datos, usuario, contraseña)
export const sequelize = new Sequelize('curso-sequelize', 'root', '',{
    dialect: 'mysql',
    port: 3306
})