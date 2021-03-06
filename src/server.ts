import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForeCastController } from './controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  // o método de baixo é privado, então tem que ser criado uma função get para ter acesso a ele.
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  // pegar o que vier do body e fazer um parse. a ideia é conseguir analisar o que vier do body e converter para json.
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecastController = new ForeCastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
