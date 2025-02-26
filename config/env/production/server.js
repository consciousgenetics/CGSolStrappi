module.exports = ({ env }) => ({
  proxy: true,
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  url: env('PUBLIC_URL', 'https://colorful-presence-d5ad21ba44.strapiapp.com'),
  api: {
    token: {
      salt: env('API_TOKEN_SALT'),
    },
  }
}); 