const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "65718DigimazRaE38816",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/digimazrae',
  GOOGLE_CONSUMER_KEY: '447176721787-p1rtlub6us6tm79evsf9lsmriul68afj.apps.googleusercontent.com',
  GOOGLE_CONSUMER_SECRET: 'Q8w2wBmkEddVpErYjmQsOnWZ',
}

export default config
