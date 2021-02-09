import { Router } from 'express';
import classRouter from './Class.routes';

const routes = Router();

routes.use(classRouter)

export default routes;
