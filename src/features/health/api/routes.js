const routes = [
    {
        method: 'GET',
        path: '/health',
        options: {
            handler: (req, h) => h.response('OK').code(200),
            description: 'Health check',
            notes: 'Health check',
            tags: ['api'],
            response: {
                status: {
                    200: undefined
                }
            }
        }
    }
];

export default routes;
