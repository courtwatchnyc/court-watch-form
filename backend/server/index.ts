import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RouteController';
const {db, User} = require('./db/models')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf']}))
app.use(AppRouter.getInstance());


const init = async () => {
    await db.sync({ force: true }),
    app.listen(8080, () => {
        console.log('Serving up sick beats on 8080')
    });
}

init();

