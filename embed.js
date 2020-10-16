const AWS = require('aws-sdk');
const https = require('https');

var quicksight = new AWS.Service({
    apiConfig: require('./quicksight-2018-04-01.min.json'),
    region: 'us-east-1',
});


var quicksight = new AWS.QuickSight();

console.log(quicksight.config.apiConfig.operations);
quicksight.listUsers({
    // Enter your actual AWS account ID
    'AwsAccountId': '024083997103',
    'Namespace': 'default',
}, function(err, data) {
    console.log('---');
    console.log('Errors: ');
    console.log(err);
    console.log('---');
    console.log('Response: ');
    console.log(data);
});

quicksight.getDashboardEmbedUrl({
    'AwsAccountId': '024083997103',
    'DashboardId': '953ae31e-2158-4d08-9b83-9bf7b094a307',
    'IdentityType': 'IAM',
    'ResetDisabled': true,
    'SessionLifetimeInMinutes': 100,
    'UndoRedoDisabled': false

}, function(err, data) {
    console.log('Errors: ');
    console.log(err);
    console.log('Response: ');
    console.log(data);
});