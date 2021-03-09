import hapiSwagger from 'hapi-swagger';

const swaggerConfig = {
    plugin: hapiSwagger,
    options: {
        info: {
            title: 'Hapi JS Template',
            version: '1.0.0'
        }
    }
};

export default swaggerConfig;
