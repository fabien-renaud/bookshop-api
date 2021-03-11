import healthRoutes from '../features/health';
import bookRoutes from '../features/book';

const routes = [...bookRoutes, ...healthRoutes];

export default routes;
