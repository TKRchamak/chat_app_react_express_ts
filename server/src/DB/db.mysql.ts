import { Sequelize } from 'sequelize';
import app from "../app";

const port: number = 5000;
const db_name: string = "chat_server_db";

const sequelize = new Sequelize(db_name, "root", "password6", {
    host: "localhost",
    dialect: "mysql",
    // operatorsAliases: false,

    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port} \nopen with http://localhost:${port}/ or http://127.0.0.1:${port}/`)
    })
} catch (error) {
    console.error('Unable to connect to the database:', error);
}