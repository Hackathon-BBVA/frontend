// Inicializar el proveedor de credenciales de Amazon Cognito
AWS.config.region = 'us-west-2'; // Región
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:14401ab4-7593-439d-ae8f-8ba8b3f15be2', //SS01
});

//revisar qué userpool son
/*window._config = {
    cognito: {
        userPoolId: 'us-west-2_rWWjfWXlq',
        userPoolClientId: '52ed5ip46q8b02qtsh4roo7oau',
        region: 'us-west-2'
    },
    api: {
        invokeUrl: 'https://0wozbzprai.execute-api.us-west-2.amazonaws.com/prod'
    }
};*/

/**
 * window._config = {
    cognito: {
        userPoolId: 'us-west-2_rjoA0PjT0', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '19j1fi2djuqpv1b1jf3f1nj5r6', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-west-2' // e.g. us-east-2
    },
    api: {
        invokeUrl: 'https://ze9ab8gfa1.execute-api.us-west-2.amazonaws.com/prod' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
 */