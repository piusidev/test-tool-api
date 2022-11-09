import { Router } from 'express';
import { service } from 'services/test';

export default (router: Router): void => {
  router.get('/test', (req, res) => service(req.body, res));
};
