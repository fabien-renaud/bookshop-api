import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import {serverConfig, swaggerConfig} from './config';
import routes from './routes';

const initServer = async () => {
    const server = new Hapi.Server(serverConfig);

    // Register plugins
    await server.register([inert, vision]);
    // Hapi Swagger is set apart because of Typescript ServerRegisterPluginObjectArray type definition
    await server.register(swaggerConfig);

    // Register routes
    server.route(routes);

    server.events.on('start', () => server.log('info', `Server is running on ${server.info.uri}`));
    server.events.on('log', (event, tags) => console.log(tags, event.data));

    return server;
};

export default initServer;
