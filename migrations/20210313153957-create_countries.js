module.exports = {
  async up(db, client) {
    return db.createCollection('countries', {
      name: String,
      code: String
    })
  },

  async down(db, client) {
    return db.dropCollection('countries')
  }
};
