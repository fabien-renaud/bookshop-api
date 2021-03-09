const serverConfig = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    debug: {request: ['error']},
    routes: {
        cors: {
            origin: ['*']
        }
    }
};

export default serverConfig;
