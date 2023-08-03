import { Dialect, Sequelize, DataType } from 'sequelize';
import app from "../app";
import { Model } from 'sequelize-typescript';

const port: number = 5000;
const dbName: string = "chat_server_db";
const dbUser: string = "root";
const dbPassword: string = "password6";
const dbHost = "localhost";
const dbDriver = "mysql" as Dialect;

// const dbName = process.env.DB_NAME as string
// const dbUser = process.env.DB_USER as string
// const dbPassword = process.env.DB_PASSWORD
// const dbHost = process.env.DB_HOST
// const dbDriver = process.env.DB_DRIVER as Dialect


const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    // operatorsAliases: false,

    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
});

try {
    await sequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
    // app.listen(port, () => {
    //     console.log(`Server is listening on port ${port} \nopen with http://localhost:${port}/ or http://127.0.0.1:${port}/`)
    // })
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

interface dbInterface {
    sequelizeConnection: Sequelize;
}

const db: dbInterface = {
    sequelizeConnection: sequelizeConnection,
};

// db["Sequelize"] = Sequelize;
// db.sequelizeConnection = sequelizeConnection;

// db["messages"] = require('')(sequelizeConnection, DataType);

db.sequelizeConnection.sync({ force: false }) // when start server without this re-create table and lost previously assigned data
    .then(() => {
        console.log('yeas, re-sync done!')
    })
export default db;