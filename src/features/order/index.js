import orderRoutes from './api';
import bookRoutes from './features/book/api';
export default [...orderRoutes, ...bookRoutes];
