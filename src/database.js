import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect('mongodb://localhost/crud-mongo')
        console.log('DB connected to: ', db.connection.name)
        //si te arroja error es porque no tienes iniciado tu servidor, para eso abre un comando y corre mongod
    } catch (error) {
        console.log(error);
    }
})()

