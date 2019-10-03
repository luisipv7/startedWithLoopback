import {IniciandoApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {IniciandoApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new IniciandoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
