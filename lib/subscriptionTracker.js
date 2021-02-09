'use strict';

async function defaultRouteHandler(request, reply) {
    return {
        message:
            'Subscription tracker ⚡ and 🔔 notification system is active !',
    };
}

async function subscriptionTrackerRouteHandler(request, reply) {}

module.exports = {
    defaultRouteHandler,
    subscriptionTrackerRouteHandler,
};
