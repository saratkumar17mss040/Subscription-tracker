'use strict';

const subscriptionTracker = require('./subscriptionTracker');

// All server routes

const defaultRoute = {
    method: 'GET',
    path: '/active',
    handler: subscriptionTracker.defaultRouteHandler,
};

const subscriptionTrackerRoute = {
    method: 'GET',
    path: '/subscriptionTracker',
    handler: subscriptionTracker.subscriptionTrackerRouteHandler,
};

module.exports = {
    defaultRoute,
    subscriptionTrackerRoute,
};
