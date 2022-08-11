import express from "express";
import indexRoutes from "./routes/index.routes";
import { engine, exphbs, create } from 'express-handlebars'
import path from 'path'
import morgan from "morgan";

const app = express()
app.set('views', path.join(__dirname, '/views'))
const hbs = create({
    layoutsDir: path.join(app.get("views"), 'layouts'),
    //partialsDir:path.join(app.get('views'),'nombre de la carpeta') esto funciona para importar los segmentos como el navbar en el main.hbs
    //por defecto esto lo agrega a la carpeta 'partials', pero en caso de que no quieras que se llame de esa forma lo puedes cambiar
    defaultLayout: 'main',
    extname: '.hbs',
});

app.engine(
    ".hbs",
    hbs.engine,
);

app.set('view engine', '.hbs')


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(indexRoutes)

export default app