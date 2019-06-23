import path from 'path'
import express from 'express'
import * as bodyParser from 'body-parser';
import Controller from '../interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

export default class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
    this.initialize404Handling();
    this.mountRoutes();
    this.staticServingMiddleware();
    this.serveUpSPA();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
    //redundant, I think, delete later
    this.app.use(bodyParser.json());

  }

  private mountRoutes() {
    this.app.use('/api', require('./api'))
  }

  private initialize404Handling() {
    this.app.use((req, res, next) => {
        if (path.extname(req.path).length > 0) {
          res.status(404).end()
        } else {
          next()
        }
      })
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private staticServingMiddleware() {
    this.app.use(express.static(path.join(__dirname, '..', 'public')))
    this.app.use(express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'css')))
    this.app.use('/fonts', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts'))) 
  }

  private serveUpSPA() {
    this.app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
      })
  }

}


