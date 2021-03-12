import bookRoutes from '../features/book';
import healthRoutes from '../features/health';
import orderRoutes from '../features/order';

const routes = [...bookRoutes, ...healthRoutes, ...orderRoutes];

export default routes;
