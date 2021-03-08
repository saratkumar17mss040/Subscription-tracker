const AWS = require('aws-sdk');
const Fs = require('fs');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing Slick Subscribers data into DynamoDB. Please wait.');

const slickUsers = JSON.parse(Fs.readFileSync('slickSubscribers.json'));

slickUsers.forEach(function (user) {
    const params = {
        TableName: 'SubscriptionTracker',
        Item: {
            accountId: user.accountId,
            registerId: user.registerId,
            createdAt: user.createdAt,
            planType: user.planType,
            planEndDate: user.planEndDate,
            planExtendedDate: user.planExtendedDate,
            expiryDate: user.expiryDate,
            paymentSource: user.paymentSource,
            isWarningSet: user.isWarningSet,
            isSoftBlocked: user.isSoftBlocked,
            isHardBlocked: user.isSoftBlocked,
            notificationHistory: user.notificationHistory,
            lastNotificationAt: user.lastNotificationAt,
        },
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error(
                'Unable to add user',
                user.emailId,
                '. Error JSON:',
                JSON.stringify(err, null, 2),
            );
        } else {
            console.log('PutItem succeeded:', user);
        }
    });
});
