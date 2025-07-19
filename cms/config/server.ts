export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT_STRAPI', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
