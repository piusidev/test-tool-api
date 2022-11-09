import cypress from 'cypress';
import { Response } from 'express';
import { ITestBodyParams } from './types.d';

export const service = (body: ITestBodyParams, res: Response) => {
  const { apiKey, env } = body;

  console.log(res, env, apiKey);

  cypress.run({
    spec: './src/cypress/e2e/common/**/*.cy.ts'
  })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
