'use strict';

// Amazon - DynamoDB config
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// const newLocal = {
//     TableName: table,
//     IndexName: indexName,
//     KeyConditionExpression: 'expiryDate = :e_date',
//     ExpressionAttributeValues: {
//         ':e_date': expiryDate,
//     },
// };
// const params = newLocal;

// console.log('Reading ExpiryDateIndex for the subscribed users...');

// docClient.query(params, function (err, data) {
//     if (err) {
//         console.error(
//             'Unable to read the ExpiryDateIndex for the subscribed users. Error JSON:',
//             JSON.stringify(err, null, 2),
//         );
//     } else {
//         console.log(
//             'ExpiryDateIndex for the subscribed users readed successfully :',
//             JSON.stringify(data.Items, null, 2),
//         );
//     }
// });

// module.exports = AWS;
