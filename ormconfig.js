module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/migration/**/*.js"
  ],
  "subscribers": [
    "dist/subscriber/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/models",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}