const AWS = require('aws-sdk');
const moment = require('moment');
// moment().format();

// Amazon - DynamoDB config
require('dotenv').config();

AWS.config.update({
    region: 'us-east-1',
});

const docClient = new AWS.DynamoDB.DocumentClient();
const subscriptionTable = 'SubscriptionTrackerTest';
const subscriptionIndex = 'ExpiryDateIndex';
const BatchJobRunDatesTable = 'BatchJobRunDatesTest';
const subScriptionTracker = 'subscription-tracker';
let runDate = undefined;

const BatchJobRunDateParams = {
    TableName: BatchJobRunDatesTable,
    KeyConditionExpression: 'jobName = :s_tracker',
    ExpressionAttributeValues: {
        ':s_tracker': subScriptionTracker,
    },
};

console.log('Reading batchJobRunDates');

docClient.query(BatchJobRunDateParams, function (err, data) {
    if (err) {
        console.error(
            'Unable to read the batchJobRunDates table users. Error JSON:',
            JSON.stringify(err, null, 2),
        );
    } else {
        console.log(
            'batchJobRunDates readed successfully :',
            JSON.stringify(data.Items, null, 2),
        );
        const response = JSON.stringify(data.Items);
        const serverData = JSON.parse(response);
        runDate = serverData[0]['runDate'];
        // console.log(serverData);
    }
});

const startDateTime = moment(runDate).add(3, 'days').startOf('day').valueOf();
const endDateTime = moment(runDate).add(3, 'days').endOf('day').valueOf();

const masterQueryParams = {
    TableName: subscriptionTable,
    IndexName: subscriptionIndex,
    KeyConditionExpression:
        'expiryDate BETWEEN :s_dateTime AND :e_dateTime', 
    ExpressionAttributeValues: {
        ':s_dateTime': startDateTime,
        ':e_dateTime': endDateTime,
    },
    // ScanIndexForward: false,
};

console.log('Reading ExpiryDateIndex for the subscribed users...');

docClient.query(masterQueryParams, function (err, data) {
    if (err) {
        console.error(
            'Unable to read the ExpiryDateIndex for the subscribed users. Error JSON:',
            JSON.stringify(err, null, 2),
        );
    } else {
        console.log(
            'ExpiryDateIndex for the subscribed users readed successfully :',
            JSON.stringify(data.Items, null, 2),
        );
    }
});
