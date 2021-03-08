// const AWS = require('aws-sdk');
const moment = require('moment');
moment().format();

const after3daysStartTime = moment().utc().add(3, 'days').valueOf();
// console.log(after3daysStartTime);

// console.log(moment(1614882600000).add(3, 'days').format('DD MMM YYYY hh:mm a'));

const start = moment(1614882600000).add(3, 'days').startOf('day').valueOf();
// set to 12:00 am today
const end = moment(1614882600000).add(3, 'days').endOf('day').valueOf();
// set to 23:59 pm today
console.log(start);
console.log(end);

// createdAt - feb 12/21
// runDate - 05/03/21  - 12AM- 1614882600000

// free trial

// 3 days before - 1615141800000 - 8/3/21
// 1 day before - 1614969000000 - 6/3/21
// same day - 1614882600000 - 5/3/21
// after 7 days -  1614277800000 - 26/2/21 ?
// 3 days before but +3 days extended - 11/3/21
// same account with 4 different registers with 3 days before

// total - 9

// monthly

// same day - 1614882600000 - 05/03/21
// after 3 days - 1614623400000 - 02/03/21

// yearly

// before 15 days - 1616178600000 - 20/3/21
// before 7 days - 1615487400000 - 12/3/21
// before 1 day - 1614969000000 - 6/3/21
// before 3 days - 1615141800000 - 8/3/21
// same day -  1614882600000 - 05/03/21
// after 7 days - 1614277800000 - 26/02/21

// no need of accountId - instead planType
// cannot do LSI without accountId
// partition key

// Fri Mar 05 2021 12:03:52
// 12.03 ->Fri Mar 05 2021 12:00:00 pm to Fri Mar 05 2021
// Thu Mar 04 2021 23:19:59
// console.log(new Date(2021, 05, 03, 1, 0, 0).toLocaleString());
// local  time - between mar 5 12pm - mar 5 11:59:59
// utc - between mar 5  - 00.00.01 - 23:59:59
// sms / notification history:

// eg:
// current date = 18/02/21
// date before three dates - 15/02/21 - into milliseconds
// Two milliseconds between -15/02/21 00 to 23:59 - filter this on the expiry date field
// date before one date - 17/02/21 - into milliseconds
// first find the last three days - date before the current date
// first find the last one day - date before the current date

// create three tables - st,a,bj with necssary fields and with
// indexes or not ?
// create dummy data in json files
// populate dummy data - load data into the table
// create a simple hapi server with one simple route to  /subscriptionTracker

// when we do a get request to this route we do the master query + all the sub queries  - we get , update and retrieve the data and take actions
// create utility functions

//  endpoint: process.env.END_POINT,
