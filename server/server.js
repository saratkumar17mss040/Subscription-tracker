'use strict';

const Hapi = require('@hapi/hapi');
const Routes = require('../lib/routes');
require('dotenv').config();

// Server config
const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost',
    routes: {
        cors: true,
    },
});

const init = async () => {
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });

    // default route
    server.route(Routes.defaultRoute);

    await server.start();

    console.log('Hello world !');
    console.log('Server ⚡ running at:', server.info.uri);
};

// initializing server
init();
