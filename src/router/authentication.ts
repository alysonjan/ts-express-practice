import express from 'express';

import { login, register, home } from '../controllers/authentication';

export default (router: express.Router) => {
  router.get('/', home);
  router.post('/auth/register', register);
  router.post('/auth/login', login);
};
