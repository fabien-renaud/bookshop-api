import {initServer, database} from './core';

const start = async () => {
    const server = await initServer();
    await server.start();

    database
        .sync()
        .then(() => server.log('info', 'Connection to database has been initialized'))
        .catch((err) => server.log('error', `Connection to database has failed: ${err}`));
};

start().catch((error) => {
    throw error;
});
