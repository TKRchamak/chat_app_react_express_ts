import mongoose from "mongoose";
import app from "./app"

const port: number = 5000;
const db_name: string = "chat_app";

// database connection
async function databaseConnection() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`);
        console.log("database connect successfully");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port} \nopen with http://localhost:${port}/ or http://127.0.0.1:${port}/`)
        })
    } catch (error) {
        console.log("not possible to connect");
        console.error(error);
    }
}
databaseConnection();
