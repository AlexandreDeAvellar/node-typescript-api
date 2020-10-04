// Usando import pelo alias @src que está configurado na src/util/module0alias.ts
import { SetupServer } from '@src/server';
import supertest from 'supertest';
// Nova Modificação

// Esse beforeAll() vai rodar antes de todos os teste.
// Ele vai ser responsável por iniciar a aplicação em modo de teste.
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  // Em supertest() vai ser informado qual aplicação vai ser iniciada.
  global.testRequest = supertest(server.getApp());
});
