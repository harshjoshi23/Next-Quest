export const environment = {
  production: true, 
  apiUrl: "https://api.nextquest.in/api"
};

export const authconfig = {
  aws_project_region: 'eu-central-1',
  aws_cognito_region: 'eu-central-1',
  aws_user_pools_id: 'eu-central-1_hS14qHtjF',
  aws_user_pools_web_client_id: '3iu5q81uo546o73j7lus893j0k',
  oauth: {
    domain: 'nextquest.auth.eu-central-1.amazoncognito.com',
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: 'https://nextquest.in',
    redirectSignOut: 'https://nextquest.in',
    responseType: 'code'
  }
};