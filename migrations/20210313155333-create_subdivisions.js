module.exports = {
  async up(db, client) {
    return db.createCollection('subdivisions', {
      name: String,
      code: String
    })
  },

  async down(db, client) {
    return db.dropCollection('subdivisions')
  }
};
