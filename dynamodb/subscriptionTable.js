'use strict';

// Amazon - DynamoDB config
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB();

const SubscriptionTableSchema = {
    TableName: 'SubscriptionTrackerTest',
    KeySchema: [
        { AttributeName: 'accountId', KeyType: 'HASH' },
        { AttributeName: 'registerId', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'accountId',
            AttributeType: 'S',
        },
        {
            AttributeName: 'registerId',
            AttributeType: 'S',
        },
        {
            AttributeName: 'expiryDate',
            AttributeType: 'N',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    GlobalSecondaryIndexes: [
        {
            IndexName: 'ExpiryDateIndex',
            KeySchema: [
                {
                    AttributeName: 'expiryDate',
                    KeyType: 'HASH',
                },
                {
                    AttributeName: 'planType',
                    KeyType: 'RANGE',
                },
            ],
            Projection: {
                ProjectionType: 'ALL',
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1,
            },
        },
    ],
};

dynamodb.createTable(SubscriptionTableSchema, function (err, data) {
    if (err) {
        console.error(
            'Unable to create subscription tracker table. Error JSON:',
            JSON.stringify(err, null, 2),
        );
    } else {
        console.log(
            'Created subscription tracker table. Table description JSON:',
            JSON.stringify(data, null, 2),
        );
    }
});
